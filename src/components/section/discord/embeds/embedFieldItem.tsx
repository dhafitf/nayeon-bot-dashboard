import { DiscordEmbedFieldProps } from "~types/discord";

interface Props extends DiscordEmbedFieldProps {
  gridCols?: number | string;
}

export default function DiscordEmbedFieldItem(props: Props) {
  const { name, value, gridCols } = props;

  return (
    <div className="discord-embed-field" style={{ gridColumn: gridCols }}>
      <div className="discord-embed-field-name">{name}</div>
      <div className="discord-embed-field-value">{value}</div>
    </div>
  );
}
