import { DiscordEmbedFieldsProps } from "~types/discord";
import DiscordEmbedFieldItem from "./embedFieldItem";
import { getFieldGridColumn } from "~utils/getFieldGridColumn";

export default function DiscordEmbedFields(props: DiscordEmbedFieldsProps) {
  const { fields } = props;

  return (
    <div className="discord-embed-fields">
      {fields.map((item, index) => {
        const ngok = getFieldGridColumn(fields, item, index);
        return <DiscordEmbedFieldItem key={index} name={item.name} value={item.value} inline={item.inline} gridCols={ngok} />;
      })}
    </div>
  );
}
