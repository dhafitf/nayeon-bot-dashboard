import { PartialChannel, PartialRoles } from "~types/discord";

export const filteredData = (channels: PartialChannel[], roles: PartialRoles[]) => {
  const filterChannels = channels.filter((c) => c.type === 0 || c.type === 5);
  const filterRoles = roles.filter((r) => r.isBot === false && r.name !== "@everyone");

  const channelsList = [
    {
      id: 0,
      name: "No follow",
    },
    ...filterChannels,
  ];
  const rolesList = [
    {
      id: 0,
      name: "No mention",
    },
    ...filterRoles,
  ];

  return { channelsList, rolesList };
};

export const defaultIndex = (data: any, setting: any) => {
  if (setting.id) {
    const index = data.findIndex((res: any) => res.id === setting.id);
    return data[index];
  }
  return data[0];
};

export const getChannelType = (type: number) => {
  if (type === 0) return "GUILD_TEXT";
  if (type === 5) return "GUILD_ANNOUNCEMENT";
};

export const valueOrNull = (value: any) => {
  const ngok = [0, "No follow", "No mention"];
  if (ngok.includes(value)) return null;
  return value;
};
