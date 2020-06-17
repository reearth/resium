import { Doc, Prop, Type } from "./types";

export function renderDoc(doc: Doc) {
  const notCesiumComponent =
    doc.cesiumProps?.length === 0 &&
    doc.cesiumReadonlyProps?.length === 0 &&
    doc.cesiumEvents?.length === 0;

  return `---
name: ${doc.name}
route: /components/${doc.name}
menu: Components
---

import Link from "../components/Link";

# ${doc.name}
${doc.summary ? `\n${doc.summary}\n` : ""}
${
  doc.noCesiumElement
    ? ""
    : `- **Cesium element**: [${doc.cesiumElement}](${getCesiumDocURL(doc.cesiumElement)})
`
}- **Example**: <Link href="/examples/?path=/story/${doc.name.toLowerCase()}--basic">${
    doc.name
  }</Link>
${
  doc.scope
    ? `
## Available scope

${doc.scope}
`
    : ""
}
## Properties
${
  !notCesiumComponent
    ? `
### Cesium properties

${renderPropTable(doc.cesiumProps, doc)}

### Cesium read-only properties

${renderPropTable(doc.cesiumReadonlyProps, doc)}

### Cesium events

${renderPropTable(doc.cesiumEvents, doc)}

### Other properties`
    : ""
}

${renderPropTable(doc.props, doc)}
`;
}

function renderPropTable(types: Prop[] = [], doc: Doc) {
  const filteredTypes = types ? types.filter(t => !t.hidden && t.name !== "children") : [];
  if (filteredTypes.length === 0) return "N/A";

  return `
| Property | Type | Description |
|--|--|--|
${filteredTypes
  .map(t => {
    return `| ${t.name} | ${renderType(t.type)} | ${t.required ? "Required. " : ""}${
      t.mappedCesiumType && !t.description
        ? `Correspond to [${doc.cesiumElement}#${t.mappedCesiumType}](${getCesiumDocURL(
            doc.cesiumElement,
            t.mappedCesiumType,
          )})`
        : t.description || ""
    } |`;
  })
  .join("\n")}
`.trim();
}

function escapeType(t: string) {
  return t.replace(/\n/g, "").replace(/ {2,}/g, " ").replace(/\|/g, "&#124");
}

function renderType(t: Type | undefined): string {
  return !t
    ? ""
    : typeof t === "string"
    ? escapeType(t)
    : Array.isArray(t)
    ? t.map(renderType).join(" &#124; ")
    : "args" in t
    ? `(${t.args
        .map(a => `${a.name}${a.optional ? "?" : ""}: ${renderType(a.type)}`)
        .join(", ")}) =&gt; ${renderType(t.return)}`
    : "element" in t
    ? `${renderType(t.element)}[]`
    : escapeType(
        t.cesium
          ? `[${t.name}](${getCesiumDocURL(
              t.leftName || t.name,
              t.rightName ? `.${t.rightName}` : undefined,
            )})`
          : t.name,
      ) + (t.params?.length ? `&lt;${t.params.map(renderType).join(", ")}&gt;` : "");
}

function getCesiumDocURL(name: string, field?: string) {
  return `https://cesium.com/docs/cesiumjs-ref-doc/${name}.html${field ? `#${field}` : ""}`;
}
