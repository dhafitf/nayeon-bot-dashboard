import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { SubsItemProps } from "~types/components";

export default function SubscriptionItem({ name, href, iconURL }: SubsItemProps) {
  return (
    <div className="flex items-center justify-between rounded-md bg-[#4b4e51] py-2 px-4">
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image alt="Logo" src={iconURL} layout="fill" objectFit="cover" objectPosition="center" />
        </div>
        <span>{name}</span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex cursor-pointer items-center gap-1 rounded-md border px-2 py-1 transition-colors hover:border-light-blue hover:bg-light-blue"
      >
        <TbExternalLink />
        <span className="text-xs">Visit</span>
      </a>
    </div>
  );
}
