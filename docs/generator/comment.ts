import { Node, getLeadingCommentRanges } from "typescript";
import { PropComment, DocComment, Type } from "./types";
import { parseTypeFromStr } from "./type";

function getLeadingComment(node: Node) {
  const text = node.getFullText();
  const nodeStart = node.getStart();
  const comment: string[] = [];
  let start = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const comments = getLeadingCommentRanges(text, start);
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

function formatComment(comment: string): string {
  const multiline = /^\/\*/.test(comment);
  const jsdoc = /\/\*\*/.test(comment);
  return comment
    .split("\n")
    .map(c => (multiline ? c.replace(/^\/\*\*? ?|\*\/$/g, "") : c.replace(/^\/\/ ?/g, "")))
    .map(c => (!jsdoc ? c : c.replace(/^ \* ?/g, "")))
    .filter((c, i, a) => (i !== 0 && i !== a.length - 1) || c.trim().length !== 0)
    .join("\n");
}

function parseLeadingComment(comments: string[]): PropComment {
  let kind = undefined;
  const description: string[] = [];
  let hidden = false;
  let type: Type | undefined;

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
      type = parseTypeFromStr(m[1]);
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

export function parsePropComment(node: Node): PropComment {
  return parseLeadingComment(getLeadingComment(node));
}

function detectComponentDescription(comments: string[]): DocComment | undefined {
  if (!comments.length) return;
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
      if (/^ *?@ignore/.test(c)) {
        return {
          ignored: true,
        };
      }
      return undefined;
    })
    .filter(c => !!c)
    .reduce((a, b) => ({ ...a, ...b }), {});
}

export function parseDocComment(node: Node): DocComment | undefined {
  return detectComponentDescription(getLeadingComment(node));
}
