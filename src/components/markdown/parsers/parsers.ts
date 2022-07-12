import { createParser } from "./createParser";
import { mention } from "../rules/mention";
import { text } from "../rules/text";
import { url } from "../rules/url";
import { newline } from "../rules/newline";
import { lineBreak } from "../rules/lineBreak";
import { escape } from "../rules/escape";
import { paragraph } from "../rules/paragraph";
import { emphasis } from "../rules/emphasis";
import { br } from "../rules/br";
import { customEmoji } from "../rules/customEmoji";
import { strong } from "../rules/strong";

const parse = createParser({
  mention,
  text,
  url,
  newline,
  lineBreak,
  escape,
  paragraph,
  emphasis,
  br,
  customEmoji,
  strong,
});

const parseButton = createParser({
  customEmoji,
});

export const PARSERS = {
  default: parse,
  button: parseButton,
};
