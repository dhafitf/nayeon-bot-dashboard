import { CSSProperties } from "react";
import { ChildrenProps } from "./default";
import { DiscordMessageProps } from "./discord";

export interface LayoutProps extends ChildrenProps {
  className?: string;
  style?: CSSProperties;
}

export interface ContainerProps extends ChildrenProps {
  size?: "md" | "lg" | "xl";
  className?: string;
}

export interface LinkProps {
  href: string;
  text: string;
  isOutsite?: boolean;
  className?: string;
}

export interface CommandItemProps {
  name: string;
  description: string;
  aliases?: string[];
  usages?: string[];
  category?: string;
  examples?: {
    message: DiscordMessageProps[];
  };
}

export interface DocsLayoutProps extends ChildrenProps {
  title?: string;
  description?: string;
}
