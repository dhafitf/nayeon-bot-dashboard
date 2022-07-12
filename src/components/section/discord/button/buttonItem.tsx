import clsx from "~utils/clsx";
import { Markdown } from "~components/markdown/Markdown";
import { DiscordButtonProps } from "~types/discord";

const LaunchIcon = () => {
  return (
    <svg className="ml-2" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
      <path fill="currentColor" d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"></path>
      <path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"></path>
    </svg>
  );
};

export default function DiscordButtonItem({ style, emoji, label, href }: DiscordButtonProps) {
  const BUTTON_TYPES = new Map(
    Object.entries({
      PRIMARY: "colorPrimary",
      SECONDARY: "colorSecondary",
      SUCCESS: "colorSuccess",
      DANGER: "colorDanger",
      LINK: "colorLink",
    })
  );

  const buttonStyle = BUTTON_TYPES.get(style);

  if (style === "LINK") {
    return (
      <a className={clsx("discord-button-item", buttonStyle)} href={href} target="_blank" rel="noopener noreferrer nofollow">
        <div className="inline-flex min-w-[32px]">
          {emoji && <Markdown className="mr-1 inline-block" content={emoji} type="button" />}
          <div>{label}</div>
          <LaunchIcon />
        </div>
      </a>
    );
  }

  return (
    <button className={clsx("discord-button-item", buttonStyle)}>
      <div className="inline-flex min-w-[32px]">
        {emoji && <Markdown className="mr-1 inline-block" content={emoji} type="button" />}
        <div>{label}</div>
      </div>
    </button>
  );
}
