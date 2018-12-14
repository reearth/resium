"use strict";
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

function renderPropTable(types) {
  if (!types || types.length === 0) return "N/A";

  return `
| Property | Type | Description |
|--|--|--|
${types
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
  return `
---
name: ${type.name}
route: /components/${type.name}
menu: Components
---

${
    type.playground
      ? `
import { Playground } from "docz";
import Viewer from "../components/Viewer";
`.trim()
      : ""
  }

# ${type.name}

${type.summary || ""}

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
`.trim()
      : ""
  }


${
    type.scope
      ? `
## Available scope

${type.scope}
`.trim()
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
  return comment.replace(/^\/\/|^\/\*\*?|\*\/$/g, "").trim();
}

function parseLeadingComment(comments) {
  let kind = undefined;
  let description = [];
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
    // normal comment = description
    description.push(c.trim());
  });
  return {
    kind,
    description: description.join(" "),
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
    kind: parsed.kind,
    description: parsed.description,
  };
}

function parsePropTypes(name, source) {
  const sourceFile = ts.createSourceFile(name + ".ts", source, ts.ScriptTarget.ES6, true);
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

const componentFiles = fs
  .readdirSync(path.resolve(__dirname, "..", "..", "src"))
  .filter(cf => /\.ts$/.test(cf) && !/index\.ts$/.test(cf));

componentFiles.forEach(cf => {
  const name = cf.replace(".ts", "");
  const code = fs.readFileSync(path.resolve(__dirname, "..", "..", "src", cf), "utf8");
  const props = parsePropTypes(name, code);
  const result = type2doc(props);
  fs.writeFileSync(path.resolve(__dirname, "..", "..", "docs", "api", `${name}.mdx`), result);
});
