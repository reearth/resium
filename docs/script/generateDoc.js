"use strict";
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const name = process.argv.slice(2).filter(a => !a.startsWith("-"));
const options = process.argv.slice(2).filter(a => a.startsWith("-"));

function renderPropTable(types) {
  if (!types || types.length === 0) return "N/A";

  return `
| Property | Type | Description |
|--|--|--|
${types
    .filter(t => !t.hidden)
    .map(t => {
      const type = t.type
        .replace(
          /Cesium\.(.+?)( |<|>|,|\[|\)|$)/g,
          "[Cesium.$1](https://cesiumjs.org/Cesium/Build/Documentation/$1.html)$2",
        )
        .replace(/\|/g, "&#124;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .split("\n")
        .map(s => s.trim())
        .join(" ");
      return `| ${t.name} | ${type} | ${t.description || ""} |`;
    })
    .join("\n")}
`.trim();
}

function type2doc(type) {
  const cesiumWidget = type.example && /<CesiumWidget/.test(type.example);

  return `
---
name: ${type.name}
route: /components/${type.name}
menu: Components
---
${
    type.example
      ? `
import { Playground } from "docz";
import ${cesiumWidget ? "CesiumWidget" : "Viewer"} from "../components/${
          cesiumWidget ? "CesiumWidget" : "Viewer"
        }";
${type.exampleImports ? type.exampleImports + "\n" : ""}`
      : ""
  }
# ${type.name}
${type.summary ? `\n${type.summary}\n` : ""}
**Cesium element**: [${type.name}](https://cesiumjs.org/Cesium/Build/Documentation/${
    type.name
  }.html)
${
    type.example
      ? `
<Playground>
${type.example
          .split("\n")
          .map(s => "  " + s)
          .join("\n")}
</Playground>
`
      : ""
  }${
    type.scope
      ? `
## Available scope

${type.scope}
`
      : ""
  }
## Properties

### Cesium properties

${renderPropTable(type.cesiumProps)}

### Cesium read only properties

${renderPropTable(type.cesiumReadonlyProps)}

### Cesium events

${renderPropTable(type.cesiumEvents)}

### Other properties

${renderPropTable(type.props)}
`.trim();
}

function getLeadingComment(node) {
  const text = node.getFullText();
  let comment = [];
  let start = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const comments = ts.getLeadingCommentRanges(text, start);
    if (comments && comments[0]) {
      comment.push(formatComment(text.slice(comments[0].pos, comments[0].end)));
      start = comments[0].end;
    } else {
      break;
    }
  }
  return comment;
}

function getTrailingComment(node, source) {
  const comments = ts.getTrailingCommentRanges(source, node.getEnd());
  if (comments && comments[0]) {
    return formatComment(source.slice(comments[0].pos, comments[0].end));
  }
  return undefined;
}

function formatComment(comment) {
  const jsdoc = /\/\*\*/.test(comment);
  return comment
    .split("\n")
    .map(c => c.replace(/^\/\/ ?|^\/\*\*? ?|\*\/$/g, ""))
    .map(c => (!jsdoc ? c : c.replace(/^ \* ?/g, "")))
    .filter((c, i, a) => (i !== 0 && i !== a.length - 1) || c.trim().length !== 0)
    .join("\n");
}

function parseLeadingComment(comments) {
  let kind = undefined;
  let description = [];
  let hidden = false;
  comments.forEach(c => {
    if (/^@CesiumProps/.test(c)) {
      kind = "cesiumProps";
      return;
    }
    if (/^@CesiumReadonlyProps/.test(c)) {
      kind = "CesiumReadonlyProps";
      return;
    }
    if (/^@CesiumEvents/.test(c)) {
      kind = "cesiumEvents";
      return;
    }
    if (/^@Props/.test(c)) {
      kind = "props";
      return;
    }
    if (/^@hidden/.test(c)) {
      hidden = true;
    }
    // normal comment = description
    description.push(c.trim());
  });
  return {
    kind,
    description: description.join(" "),
    hidden,
  };
}

function getProp(node, source) {
  const comment = getTrailingComment(node, source);
  const leadingComment = getLeadingComment(node);

  let optional = false;
  let counter = 0;
  let type = "";
  node.forEachChild(node2 => {
    if (node2.kind === ts.SyntaxKind.QuestionToken) {
      optional = true;
    } else if (counter === 1 || (optional && counter == 2)) {
      // this is type
      type = node2.getText();
    }
    counter++;
  });

  const formattedType = type.replace(/:.+?\/\* (.+) \*\/(,|\))/g, ": $1$2");
  const parsed = parseLeadingComment(leadingComment);

  return {
    name: node.name.escapedText,
    type: comment ? comment.replace(";").trim() : formattedType,
    required: !optional,
    ...parsed,
  };
}

function detectComponentDescription(comments) {
  if (!comments && !comments.length > 0) return;
  return comments
    .map(c => {
      if (/^ *?@summary/.test(c)) {
        return {
          summary: c.replace(/^ *?@summary/, "").trim(),
        };
      }
      if (/^ *?@scope/.test(c)) {
        return {
          scope: c.replace(/^ *?@scope/, "").trim(),
        };
      }
      if (/^ *?@example-imports/.test(c)) {
        return {
          exampleImports: c.replace(/^ *?@example-imports/, "").trim(),
        };
      }
      if (/^ *?@example/.test(c)) {
        return {
          example: c.replace(/^ *?@example/, "").trim(),
        };
      }
      return undefined;
    })
    .filter(c => !!c)
    .reduce((a, b) => ({ ...a, ...b }), {});
}

function parsePropTypes(name, source, tsx) {
  const sourceFile = ts.createSourceFile(
    name + ".ts" + (tsx ? "x" : ""),
    source,
    ts.ScriptTarget.ES6,
    true,
  );
  const props = {
    name,
    cesiumProps: [],
    cesiumReadonlyProps: [],
    cesiumEvents: [],
    props: [],
  };
  const eventMap = [];

  sourceFile.forEachChild(node => {
    if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
      const name = node.name.escapedText;
      const key = /CesiumProps$/.test(name)
        ? "cesiumProps"
        : /CesiumReadonlyProps$/.test(name)
        ? "cesiumReadonlyProps"
        : /CesiumEvents$/.test(name)
        ? "cesiumEvents"
        : /Props$/.test(name)
        ? "props"
        : undefined;
      if (!key) return;

      node.forEachChild(node2 => {
        if (node2.kind === ts.SyntaxKind.PropertySignature) {
          const p = getProp(node2, source);
          props[p.kind || key].push(p);
        }
      });
    } else if (
      node.kind === ts.SyntaxKind.VariableStatement &&
      node.declarationList.declarations[0] &&
      node.declarationList.declarations[0].name.escapedText === "cesiumEventProps"
    ) {
      node.declarationList.declarations[0].initializer.forEachChild(node2 => {
        if (
          node2.kind !== ts.SyntaxKind.PropertyAssignment ||
          !node2.initializer ||
          !node2.initializer.text
        )
          return;

        eventMap.push([node2.initializer.text, node2.name.escapedText]);
      });
    }

    const comment = detectComponentDescription(getLeadingComment(node));
    if (comment) {
      Object.entries(comment).forEach(([k, v]) => {
        props[k] = v;
      });
    }
  });

  eventMap.forEach(ev => {
    const ev2 = props.cesiumEvents.find(e => e.name === ev[0]);
    if (ev2 && (!ev2.description || ev2.description === "")) {
      ev2.description = `Correspond to [${name}#${
        ev[1]
      }](https://cesiumjs.org/Cesium/Build/Documentation/${name}.html#${ev[1]})`;
    }
  });

  return props;
}

// eslint-disable-next-line no-console
console.log(`Generating documents...${name.length > 0 ? `: ${name.join(", ")}` : ""}`);

const componentFiles = fs
  .readdirSync(path.resolve(__dirname, "..", "..", "src"))
  .filter(cf => /\.tsx?$/.test(cf) && !/index\.tsx?$/.test(cf))
  .filter(cf => name.length === 0 || name.includes(cf.replace(/\.tsx?$/, "")));

if (componentFiles.length > 0) {
  try {
    fs.mkdirSync(path.resolve(__dirname, "..", "api"));
  } catch (err) {
    // ignore
  }
}

const preview = options.includes("--preview");

componentFiles.forEach(cf => {
  const name = cf.replace(/\.tsx?$/, "");
  const code = fs.readFileSync(path.resolve(__dirname, "..", "..", "src", cf), "utf8");
  const props = parsePropTypes(name, code);
  if (preview) {
    // eslint-disable-next-line no-console
    console.log(props);
    return;
  }
  const result = type2doc(props);
  fs.writeFileSync(path.resolve(__dirname, "..", "..", "docs", "api", `${name}.mdx`), result);
});

if (!preview) {
  // eslint-disable-next-line no-console
  console.log(`${componentFiles.length} documents have been genereted!`);
}
