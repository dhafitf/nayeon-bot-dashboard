import React from "react";
import { defaultRules, inlineRegex } from "simple-markdown";
import type { MarkdownRule } from "../parsers/MarkdownRule";

const REGEX = /^(\\r\\n|\\r|\\n)/;

export const br: MarkdownRule = {
  order: defaultRules.br.order,
  match: inlineRegex(REGEX),
  parse: (capture) => {
    const [text] = capture;

    return {
      content: text,
    };
  },
  react: (node, output, state) => <br key={state.key} />,
};
