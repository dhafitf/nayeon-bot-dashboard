import { CSSProperties } from "react";
import { ChildrenProps } from "./default";
import { DiscordMessageProps, PartialChannel, PartialRoles } from "./discord";
import { Dispatch, SetStateAction } from "react";

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

export interface WarningBoxProps {
  isChanged: boolean;
  onCancel: () => void;
  onSave: () => void;
  isLoading: boolean;
}

export interface DashboardLayoutProps extends ChildrenProps {
  guildID: string;
  path: string;
  guild: any;
}

export interface DashboardSettingsProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

export interface DashboardSubsProps {
  channels: PartialChannel[];
  roles: PartialRoles[];
  settings: {
    channel: PartialChannel;
    role: PartialRoles;
  };
}

export interface SubsItemProps {
  name: string;
  iconURL: string;
  href: string;
}

export interface SubsPageProps {
  name: string;
  channelsList: any;
  selectedChannel: PartialChannel;
  setSelectedChannel: Dispatch<SetStateAction<PartialChannel>>;
  rolesList: any;
  selectedRole: PartialRoles;
  setSelectedRole: Dispatch<SetStateAction<PartialRoles>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
  isChange: boolean;
  messagePreview: DiscordMessageProps[];
  subscriptionsList: SubsItemProps[];
  isLoading: boolean;
}

export interface DashboardOverviewProps {
  membersCount: number;
  channelsCount: number;
  rolesCount: number;
}
