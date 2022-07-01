import clsx from "~utils/clsx";
import { FaDiscord } from "react-icons/fa";

export default function InviteButton({ className }: { className?: string }) {
  return (
    <a
      className={clsx(
        "cursor-pointer rounded-md bg-light-blue transition-colors hover:bg-[#5770cc]",
        "flex items-center font-bold",
        className ? className : "gap-2 px-3 py-1 md:my-4"
      )}
      href="/invite"
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      <FaDiscord />
      Invite Nayeon
    </a>
  );
}
