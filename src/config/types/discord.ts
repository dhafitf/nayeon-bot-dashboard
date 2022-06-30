import { ChildrenProps } from "./default";

export interface DiscordAuthorProps {
  name: string;
  icon_url: string;
}

export interface DiscordMessageContentProps extends ChildrenProps {
  name?: string;
  isBot?: boolean;
  color?: string;
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

export interface DiscordMessageProps {
  name: string;
  icon_url: string;
  isBot: boolean;
  color: string;
  content?: string;
  attachment?: string[];
  embeds?: DiscordEmbedProps[];
}
