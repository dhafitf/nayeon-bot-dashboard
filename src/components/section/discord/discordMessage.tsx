import React from "react";
import { DiscordEmbed } from "./embeds";
import { DiscordMessageImage, DiscordMessageContent, DiscordAuthorAvatar, DiscordReplyMessage } from "./message/";
import { DiscordMessageProps } from "~types/discord";

interface Props {
  message: DiscordMessageProps[];
}

export default function DiscordMessage({ message }: Props) {
  return (
    <div className="discord-messages">
      {message.map((item, index) => {
        const { name, icon_url, color, isBot, timestamp, replyContent, content, embeds, attachment } = item;
        return (
          <div key={index} className="discord-message">
            {replyContent && (
              <DiscordReplyMessage
                name={replyContent.name}
                icon_url={replyContent.icon_url}
                color={replyContent.color}
                content={replyContent.content}
                isBot={replyContent.isBot}
                isSlashCommand={replyContent.isSlashCommand}
              />
            )}
            <div className="discord-message-container">
              <DiscordAuthorAvatar name={name} icon_url={icon_url} />
              <DiscordMessageContent name={name} color={color} isBot={isBot} timestamp={timestamp}>
                {content && <div className="discord-message-content" dangerouslySetInnerHTML={{ __html: content }} />}
                {embeds && (
                  <>
                    {embeds.map((embed, index) => {
                      return <DiscordEmbed {...embed} key={index} />;
                    })}
                  </>
                )}
                {attachment && (
                  <div className="discord-message-attachment">
                    {attachment.map((image, index) => {
                      return <DiscordMessageImage key={index} url={image} />;
                    })}
                  </div>
                )}
              </DiscordMessageContent>
            </div>
          </div>
        );
      })}
    </div>
  );
}
