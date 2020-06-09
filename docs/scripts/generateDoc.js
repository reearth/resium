"use strict";
const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const globby = require("globby");

const name = process.argv.slice(2).filter(a => !a.startsWith("-"));
const options = process.argv.slice(2).filter(a => a.startsWith("-"));

const eventTypes = t => [
  { name: "onClick", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onDoubleClick", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onMouseDown", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onMouseUp", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onMiddleClick", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onMiddleDown", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onMiddleUp", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onMouseMove", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onPinchEnd", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onPinchMove", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onPinchStart", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onRightClick", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onRightDown", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onRightUp", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onMouseEnter", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
  { name: "onMouseLeave", type: `(movement: CesiumMovementEvent, target: ${t}) => void` },
];

const rootEventType = [...eventTypes("any"), { name: "onWheel", type: `(delta: number) => void` }];

function renderPropTable(types) {
  const filteredTypes = types ? types.filter(t => !t.hidden && t.name !== "children") : [];
  if (filteredTypes.length === 0) return "N/A";

  return `
| Property | Type | Description |
|--|--|--|
${filteredTypes
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
    return `| ${t.name} | ${type} | ${t.required ? "Required. " : ""}${t.description || ""} |`;
  })
  .join("\n")}
`.trim();
}

function type2doc(type) {
  const generalComponent =
    type.cesiumProps.length === 0 &&
    type.cesiumReadonlyProps.length === 0 &&
    type.cesiumEvents.length === 0;

  return `---
name: ${type.name}
route: /components/${type.name}
menu: Components
---

import Link from "../components/Link";

# ${type.name}
${type.summary ? `\n${type.summary}\n` : ""}
${
  type.noCesiumElement
    ? ""
    : `- **Cesium element**: [${
        type.cesiumElement || type.name
      }](https://cesiumjs.org/Cesium/Build/Documentation/${type.cesiumElement || type.name}.html)
`
}- **Example**: <Link href="/examples/?path=/story/${type.name.toLowerCase()}--basic">${
    type.name
  }</Link>
${
  type.scope
    ? `
## Available scope

${type.scope}
`
    : ""
}
## Properties
${
  !generalComponent
    ? `
### Cesium properties

${renderPropTable(type.cesiumProps)}`
    : ""
}
${
  !generalComponent
    ? `
### Cesium read-only properties

${renderPropTable(type.cesiumReadonlyProps)}
`
    : ""
}${
    !generalComponent
      ? `
### Cesium events

${renderPropTable(type.cesiumEvents)}
`
      : ""
  }${
    generalComponent
      ? ""
      : `
### Other properties`
  }

${renderPropTable(type.props)}
`;
}

function getLeadingComment(node) {
  const text = node.getFullText();
  const nodeStart = node.getStart();
  let comment = [];
  let start = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const comments = ts.getLeadingCommentRanges(text, start);
    if (comments && comments[0]) {
      if (comments[0].pos >= nodeStart) {
        break;
      }
      comment.push(formatComment(text.slice(comments[0].pos, comments[0].end)));
      start = comments[0].end;
    } else {
      break;
    }
  }
  return comment;
}

function formatComment(comment) {
  const multiline = /^\/\*/.test(comment);
  const jsdoc = /\/\*\*/.test(comment);
  return comment
    .split("\n")
    .map(c => (multiline ? c.replace(/^\/\*\*? ?|\*\/$/g, "") : c.replace(/^\/\/ ?/g, "")))
    .map(c => (!jsdoc ? c : c.replace(/^ \* ?/g, "")))
    .filter((c, i, a) => (i !== 0 && i !== a.length - 1) || c.trim().length !== 0)
    .join("\n");
}

function parseLeadingComment(comments) {
  let kind = undefined;
  let description = [];
  let hidden = false;
  let type = undefined;

  comments.forEach(c => {
    if (/^@CesiumProp/.test(c)) {
      kind = "cesiumProps";
      return;
    }
    if (/^@CesiumReadonlyProp/.test(c)) {
      kind = "cesiumReadonlyProps";
      return;
    }
    if (/^@CesiumEvent/.test(c)) {
      kind = "cesiumEvents";
      return;
    }
    if (/^@prop/.test(c)) {
      kind = "props";
      return;
    }
    if (/^@hidden/.test(c)) {
      hidden = true;
    }
    const m = c.match(/^@type (.+?)$/);
    if (m) {
      type = m[1].trim();
      return;
    }
    // normal comment = description
    description.push(c.trim());
  });

  return {
    kind,
    description: description.join(" "),
    hidden,
    type,
  };
}

function getProp(node) {
  const comment = parseLeadingComment(getLeadingComment(node));

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

  const formattedType = comment.type || type.replace(/:.+?\/\* (.+) \*\/(,|\))/g, ": $1$2");

  return {
    name: node.name.escapedText,
    required: !optional,
    ...comment,
    type: formattedType,
  };
}

function detectComponentDescription(comments) {
  if (!comments && !comments.length > 0) return;
  return comments
    .map(c => {
      if (/^ *?@noCesiumElement/.test(c)) {
        return {
          noCesiumElement: true,
        };
      }
      if (/^ *?@cesiumElement/.test(c)) {
        return {
          cesiumElement: c.replace(/^ *?@cesiumElement/, "").trim(),
        };
      }
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
      return undefined;
    })
    .filter(c => !!c)
    .reduce((a, b) => ({ ...a, ...b }), {});
}

function parsePropTypes(name, source, tsx) {
  if (/\/\/ @ignore/.test(source)) {
    return undefined;
  }

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
      const key = /.+?CesiumProps$/.test(name)
        ? "cesiumProps"
        : /.+?CesiumReadonlyProps$/.test(name)
        ? "cesiumReadonlyProps"
        : /.+?CesiumEvents$/.test(name)
        ? "cesiumEvents"
        : /.+?Props$/.test(name)
        ? "props"
        : undefined;
      if (key) {
        node.forEachChild(node2 => {
          if (node2.kind === ts.SyntaxKind.PropertySignature) {
            const p = getProp(node2);
            props[p.kind || key].push(p);
          }
        });
      }
    } else if (
      node.kind === ts.SyntaxKind.VariableStatement &&
      node.declarationList.declarations[0] &&
      node.declarationList.declarations[0].name.escapedText === "cesiumEventProps"
    ) {
      node.declarationList.declarations[0].initializer.forEachChild(node2 => {
        if (
          node2.kind === ts.SyntaxKind.PropertyAssignment &&
          node2.initializer &&
          node2.initializer.text
        ) {
          eventMap.push([node2.initializer.text, node2.name.escapedText]);
        }
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
      ev2.description = `Correspond to [${name}#${ev[1]}](https://cesiumjs.org/Cesium/Build/Documentation/${name}.html#${ev[1]})`;
    }
  });

  const rootEventPropsMatch = source.match(/RootEventProps/);
  if (rootEventPropsMatch) {
    props.props = [...props.props, ...rootEventType];
  } else {
    const eventPropsMatch = source.match(/EventProps<(.*?)>/);
    if (eventPropsMatch) {
      props.props = [...props.props, ...eventTypes(eventPropsMatch[1])];
    }
  }

  return props;
}

// eslint-disable-next-line no-console
console.log(`Generating documents...${name.length > 0 ? `: ${name.join(", ")}` : ""}`);

const componentFiles = globby
  .sync([
    "../src/*/*.ts{,x}",
    "!../src/*/index.ts{,x}",
    "!../src/*/story.ts{,x}",
    "!../src/*/test.ts{,x}",
    "!../src/*/*.test.ts{,x}",
    "!../src/core/**/*",
  ])
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
  const name = path.parse(cf).name;
  const code = fs.readFileSync(cf, "utf8");
  const props = parsePropTypes(name, code);
  if (preview) {
    // eslint-disable-next-line no-console
    console.log(props);
    return;
  }
  if (props) {
    const result = type2doc(props);
    fs.writeFileSync(path.resolve(__dirname, "..", "..", "docs", "api", `${name}.mdx`), result);
  }
});

if (!preview) {
  // eslint-disable-next-line no-console
  console.log(`${componentFiles.length} documents have been genereted!`);
}
