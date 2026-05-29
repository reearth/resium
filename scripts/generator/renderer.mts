import type { Doc, Prop, TypeExpr, CesiumTypeExpr } from "./types.mts";

export function renderDoc(doc: Doc) {
  // Starlight renders the frontmatter `title` as the page's H1 automatically,
  // so we don't emit an explicit `# ${doc.name}` heading here (it would duplicate it).
  const out = `---
title: ${doc.name}
---
${doc.summary ? `\n${doc.summary}\n` : ""}
${
  doc.noCesiumElement
    ? ""
    : `- **Cesium element**: [${doc.cesiumElement}](${getCesiumDocURL(doc.cesiumElement)})
`
}- **Example**: [${doc.name}](https://resium.reearth.io/examples/?path=/story/${doc.name.toLowerCase()}--basic)
${
  doc.scope
    ? `
## Availability

${doc.scope}
`
    : ""
}${
  doc.example
    ? `
## Example

${doc.example}
`
    : ""
}
## Properties

${
  !doc.noCesiumElement
    ? `### Cesium properties

${renderPropTable(doc.cesiumProps, doc)}

### Cesium read-only properties

${renderPropTable(doc.cesiumReadonlyProps, doc)}

### Cesium events

${renderPropTable(doc.cesiumEvents, doc)}

### Other properties

${renderPropTable(doc.otherProps, doc)}`
    : renderPropTable(doc.props, doc)
}
`;

  // Normalize internal component links to lowercase so they match the lowercased
  // page slugs (the `@summary`/`@scope` annotations mix `/components/Entity` and
  // `/components/entity`). Cesium doc URLs and other links are left untouched.
  return out.replace(/(\]\(\/components\/)([A-Za-z0-9]+)/g, (_, prefix, name) => prefix + name.toLowerCase());
}

function renderPropTable(props: Prop[] = [], doc: Doc) {
  return props.length
    ? `
| Property | Type | Description |
|--|--|--|
${props
  .map(t => {
    return `| ${t.name} | ${renderType(t.type)} | ${t.required ? "Required. " : ""}${
      t.mappedCesiumFieldName && !t.desc
        ? `Correspond to [${doc.cesiumElement}#${t.mappedCesiumFieldName}](${getCesiumDocURL(
            doc.cesiumElement,
            t.mappedCesiumFieldName,
          )})`
        : t.desc || ""
    } |`;
  })
  .join("\n")}
`.trim()
    : "N/A";
}

function renderType(t: TypeExpr | undefined): string {
  return escapeType(
    !t
      ? ""
      : !t.cesiumTypes.length
        ? t.text
        : t.cesiumTypes
            .concat()
            .sort((a, b) => a.start - b.start)
            .map<[CesiumTypeExpr, CesiumTypeExpr | undefined]>((s, i, a) => [
              s,
              i === 0 ? undefined : a[i - 1],
            ])
            .reduce(
              (a, [current, prev]) =>
                a +
                (prev ? t.text.slice(prev.end, current.start) : t.text.slice(0, current.start)) +
                `[${getCesiumTypeName(current)}](${getCesiumDocURL(current.name, current.field, current.fieldIsType)})`,
              "",
            ) + t.text.slice(t.cesiumTypes[t.cesiumTypes.length - 1].end),
  );
}

function escapeType(t: string) {
  return t
    .replace(/\n/g, "")
    .replace(/ {2,}/g, " ")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;")
    .replace(/\|/g, "&#124;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getCesiumTypeName(t: CesiumTypeExpr) {
  return `${t.name}${t.field ? `.${t.field}` : ""}`;
}

function getCesiumDocURL(name: string, field?: string, fieldIsType?: boolean) {
  return `https://cesium.com/docs/cesiumjs-ref-doc/${name}.html${field ? `#${fieldIsType ? "." : ""}${field}` : ""}`;
}
