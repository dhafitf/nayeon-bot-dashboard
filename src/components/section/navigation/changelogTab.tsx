import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "~utils/clsx";
import { FaDiscord } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const sidebarMenu = [
  {
    name: "Discord bot",
    href: "/changelog/discord-bot",
    icon: <FaDiscord />,
  },
  {
    name: "Website",
    href: "/changelog/website",
    icon: <MdSpaceDashboard />,
  },
];

export default function ChangelogTab() {
  const router = useRouter();

  return (
    <div className="py-4 md:my-8 max-md:top-[3.2rem] max-md:bg-[#2c2f33]">
      <h3 className="text-4xl font-semibold">Changelog</h3>
      <p className="py-6 ">Notable changes for all nayeon bot applications, including nayeon bot, website, etc.</p>
      <ul className="noScrollBar flex gap-4 overflow-auto md:gap-6 md:text-lg">
        {sidebarMenu.map((menu, index) => {
          return (
            <li key={index} className={clsx("relative rounded", router.pathname === menu.href && "docsListItem ")}>
              <Link href={`${menu.href}`}>
                <a className={clsx("flex items-center whitespace-nowrap font-semibold", router.pathname === menu.href ? "text-light-blue" : "text-[#64748B]")}>
                  <span className="pr-2">{menu.icon}</span>
                  <span>{menu.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
