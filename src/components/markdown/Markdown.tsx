import React, { memo } from "react";
import { PARSERS } from "./parsers/parsers";

export type MarkdownProps = {
  className?: string;
  content: string;
  type?: keyof typeof PARSERS;
};

function MarkdownRenderer(props: MarkdownProps) {
  const { className, content, type = "default" } = props;

  const parse = PARSERS[type];

  return <div className={className}>{parse(content.trim())}</div>;
}

export const Markdown = memo(MarkdownRenderer);
