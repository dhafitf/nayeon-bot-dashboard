import DiscordMessage from "@discord/discordMessage";
import { useState } from "react";
import { CommandItemProps } from "~types/components";
import clsx from "~utils/clsx";
import { MdKeyboardArrowDown } from "react-icons/md";
import CommandUsageItem from "./commandUsageItem";

export default function CommandItem({ name, description, aliases, usages, examples }: CommandItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col rounded-md bg-[#3c4146]">
      <div onClick={handleOpen} className="flex w-full cursor-pointer items-center gap-3 px-4 py-[10px] shadow-md">
        <div className="flex rounded-md bg-[#4B535E]">
          <div className="w-1 rounded-l bg-light-blue"></div>
          <div className="px-2 py-1 font-sans lowercase">{name}</div>
        </div>
        <div className="flex w-full items-center justify-between overflow-hidden">
          <div className="flex gap-3 overflow-hidden">
            <div className="text-[#7b7d81]">-</div>
            <div className="truncate text-[#7b7d81]">{description}</div>
          </div>
          <div className={clsx(isOpen && "rotate-180", "transition-all duration-300")}>
            <MdKeyboardArrowDown className="text-lg" />
          </div>
        </div>
      </div>
      <div className={clsx("overflow-hidden text-sm transition-all duration-500", isOpen ? "max-h-[1000px]" : "max-h-0")}>
        <div className="px-4 py-4">
          <div className="mb-2">{description}</div>
          {aliases && (
            <div className="inline-flex items-center">
              <div className="pr-2 text-base font-semibold">Aliases :</div>
              <div>
                {aliases.map((alias) => {
                  return (
                    <div key={alias} className="rounded bg-[#27292c] py-1 px-2 text-xs">
                      {alias}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {usages && (
            <div>
              <div className="my-2 pr-2 text-base font-semibold">Usages :</div>
              <div className="flex flex-col gap-2">
                {usages.map((usage) => {
                  return <CommandUsageItem key={usage} text={usage} />;
                })}
              </div>
            </div>
          )}
          {examples && (
            <>
              <div className="mb-2 mt-2 text-base font-semibold">Examples</div>
              <DiscordMessage message={examples.message} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
