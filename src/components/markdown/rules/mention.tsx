import React from "react";
import { defaultRules, inlineRegex } from "simple-markdown";
import type { MarkdownRule } from "../parsers/MarkdownRule";

const MENTION_RE = /^<(@!?|@&|#)\d+>|^(@(?:everyone|here))/;

const MENTION_TYPES = new Map(
  Object.entries({
    "@": "@user",
    "@!": "@user",
    "@&": "@role",
    "#": "#channel",
  })
);

export const mention: MarkdownRule = {
  order: defaultRules.text.order,
  match: inlineRegex(MENTION_RE),
  parse: (capture) => {
    const [, type, everyoneOrHere] = capture;

    if (everyoneOrHere) {
      return {
        content: everyoneOrHere,
      };
    }

    return {
      content: MENTION_TYPES.get(type),
    };
  },
  react: (node, output, state) => (
    <span className="cursor-pointer rounded-sm bg-[#5865f24d] px-1 text-sm text-[#dee0fc] hover:bg-[#5865f2]" key={state.key}>
      {node.content}
    </span>
  ),
};
