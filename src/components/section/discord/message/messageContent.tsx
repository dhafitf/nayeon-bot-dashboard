import { DiscordMessageContentProps } from "~/src/config/types/discord";
import VerifiedTag from "../verifiedTag";

export default function DiscordMessageContent(props: DiscordMessageContentProps) {
  const { name, isBot, color, timestamp, children } = props;
  const nickColor = color ? { color: color } : {};
  const time = timestamp ? timestamp : "06/29/2022";
  return (
    <div className="discord-message-body">
      <span className="discord-author-info">
        <span className="discord-author-username" style={nickColor}>
          {name}
        </span>
        {isBot && (
          <span className="discord-author-bot">
            <VerifiedTag />
            <span className="leading-[.9375rem]">BOT</span>
          </span>
        )}
        <span className="discord-message-timestamp">{time}</span>
      </span>
      <div className="discord-message-body">{children}</div>
    </div>
  );
}
