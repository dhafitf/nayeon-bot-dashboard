import { useState } from "react";
import clsx from "~utils/clsx";

interface CommandUsageItemProps {
  text: string;
}

export default function CommandUsageItem({ text }: CommandUsageItemProps) {
  const [isHover, setIsHover] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState("Click to copy");
  const [tooltipBG, setTooltipBG] = useState("bg-slate-700");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setCopyMessage("Copied!");
    setTooltipBG("bg-green-700");
  };

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
    setIsCopied(false);
    setCopyMessage("Click to copy");
    setTooltipBG("bg-slate-700");
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => copyToClipboard(text)} className="group relative text-xs">
      <code className="block cursor-pointer rounded bg-[#27292c] py-3 px-3 transition-colors group-hover:bg-[#191b1d]">{text}</code>
      <label
        className={clsx(
          "absolute top-0 right-0 my-1 mr-4 cursor-pointer rounded px-4 py-2 transition-opacity",
          isHover ? "opacity-1" : "opacity-0",
          tooltipBG,
          isCopied ? "" : "before:tooltip-arrow "
        )}
      >
        {copyMessage}
      </label>
    </div>
  );
}
