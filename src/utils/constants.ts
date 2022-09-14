export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
export const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const DiscordOauthURL = `https://discord.com/oauth2/authorize`;

export const inviteBotURL = (guildId: string) => {
  const inviteURL = new URL(DiscordOauthURL);

  inviteURL.search = new URLSearchParams([
    ["client_id", CLIENT_ID],
    ["scope", "bot applications.commands"],
    ["permissions", "139855326334"],
    ["guild_id", guildId],
    ["response_type", "code"],
    ["redirect_uri", `${WEB_URL}/redirect`] as any,
  ]).toString();

  return inviteURL.toString();
};
