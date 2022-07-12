import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "~utils/clsx";

const sidebarMenu = [
  {
    name: "Quick Start",
    href: "/docs/quickstart",
  },
  {
    name: "Translator",
    href: "/docs/translator",
  },

  {
    name: "Social Media",
    href: "/docs/socmed",
  },
  {
    name: "Privacy Policy",
    href: "/docs/privacy-policy",
  },
  {
    name: "Terms of Service",
    href: "/docs/terms",
  },
];

export default function DocsSidebar() {
  const router = useRouter();

  return (
    <aside className="sticky z-10 h-fit py-4 md:top-[calc(1px*var(--header-height)+2rem)] md:my-8 max-md:top-[3.2rem] max-md:bg-[#2c2f33]">
      <h3 className="pb-6 text-4xl font-semibold max-md:hidden">Content</h3>
      <ul className="noScrollBar flex overflow-auto md:flex-col md:gap-4 md:text-lg">
        {sidebarMenu.map((menu, index) => {
          return (
            <li key={index} className={clsx("relative rounded max-md:px-2", router.pathname === menu.href && "max-md:docsListItem ")}>
              <Link href={`${menu.href}`}>
                <a className={clsx("whitespace-nowrap font-semibold", router.pathname === menu.href ? "text-white" : "text-[#64748B]")}>{menu.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
