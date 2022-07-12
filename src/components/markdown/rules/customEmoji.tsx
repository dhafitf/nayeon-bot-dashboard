import { defaultRules, inlineRegex } from "simple-markdown";
import type { MarkdownRule } from "../parsers/MarkdownRule";

const CUSTOM_EMOJI_REGEX = /^<(a)?:(\w+):(\d+)>/;

const getCustomEmojiURL = (id: string, animated: boolean) => {
  return `https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "png"}`;
};

export const customEmoji: MarkdownRule = {
  ...defaultRules.text,
  match: inlineRegex(CUSTOM_EMOJI_REGEX),
  parse: (capture) => {
    const [, animated, name, id] = capture;
    return {
      type: "customEmoji",
      name,
      content: getCustomEmojiURL(id, Boolean(animated)),
    };
  },
  react: (node, output, state) => <img key={state.key} className="inline-block max-h-[1rem] max-w-[1rem] cursor-pointer" src={node.content} alt={node.name} />,
};
