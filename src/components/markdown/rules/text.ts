import { defaultRules } from "simple-markdown";
import type { MarkdownRule } from "../parsers/MarkdownRule";

export const text: MarkdownRule = {
  ...defaultRules.text,
  parse: (capture, parse, state) => {
    const [content] = capture;
    const { nested } = state;

    if (nested) {
      return {
        content,
      };
    }

    return parse(content, {
      ...state,
      nested: true,
    });
  },
};
