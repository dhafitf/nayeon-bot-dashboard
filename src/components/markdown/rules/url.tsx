import { defaultRules } from "simple-markdown";
import type { MarkdownRule } from "../parsers/MarkdownRule";

export const url: MarkdownRule = {
  ...defaultRules.url,
  parse: (capture) => {
    const [, url] = capture;

    return {
      content: [
        {
          type: "text",
          content: url,
        },
      ],
      target: url,
    };
  },
  react: (node, output, state) => (
    <a key={state.key} className="textLink" href={node.target} rel="noopener noreferrer nofollow" target="_blank">
      {output(node.content, state)}
    </a>
  ),
};
