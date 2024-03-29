import { ChildrenProps } from "./default";

export interface DiscordAuthorProps {
  name: string;
  icon_url: string;
}

export interface DiscordMessageContentProps extends ChildrenProps {
  name?: string;
  isBot?: boolean;
  color?: string;
  timestamp?: string;
}

export interface DiscordEmbedAuthorProps extends DiscordAuthorProps {
  url?: string;
}

export interface DiscordEmbedTitleProps {
  title?: string;
  url?: string;
}

export interface DiscordEmbedFieldProps {
  name: string;
  value: string;
  inline?: boolean;
}

export interface DiscordEmbedFieldsProps {
  fields: DiscordEmbedFieldProps[];
}

export interface DiscordImageProps {
  url: string;
  isEmbed?: boolean;
}

export interface DiscordEmbedFooterProps {
  footer?: {
    text?: string;
    icon_url?: string;
  };
  timestamp?: string;
}

export interface DiscordEmbedProps extends DiscordEmbedTitleProps {
  color?: string;
  author?: DiscordEmbedAuthorProps;
  description?: string;
  thumbnail?: {
    url: string;
  };
  fields?: DiscordEmbedFieldProps[];
  image?: DiscordImageProps;
  footer?: {
    text?: string;
    icon_url?: string;
  };
  timestamp?: any;
}

export interface DiscordReplyMessageProps {
  name: string;
  icon_url: string;
  color?: string;
  isBot?: boolean;
  isSlashCommand?: boolean;
  content: string;
}

export interface DiscordButtonProps {
  style: "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER" | "LINK";
  emoji?: string;
  label: string;
  href?: string;
}

export interface DiscordMessageProps {
  name: string;
  icon_url: string;
  isBot: boolean;
  color: string;
  timestamp?: string;
  replyContent?: DiscordReplyMessageProps;
  content?: string;
  attachment?: string[];
  embeds?: DiscordEmbedProps[];
  buttons?: DiscordButtonProps[];
}

export type PartialUser = {
  id: string;
  username: string;
  discriminator: string;
  email: string;
  iconURL: string;
};

export type PartialChannel = {
  id: string;
  name: string;
  type: number | string;
  position: number;
  parentID: number | string;
};

export type PartialRoles = {
  id: string;
  name: string;
  color: string | number;
  permissions: string | number;
  position: number;
  managed: boolean;
  hoist: boolean;
  isBot: boolean;
};
