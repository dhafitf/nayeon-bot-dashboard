import DashboardNavbar from "@section/navigation/dashboardNavbar";
import Container from "./container";
import clsx from "~utils/clsx";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import sidebarMenu from "~utils/sidebarMenu";
import { DashboardLayoutProps } from "~types/components";
import DevResponseModal from "../other/devResponseModal";

export default function DashboardLayout({ guildID, path, children, guild }: DashboardLayoutProps) {
  const { icon, name } = guild;
  const splitedName = name.split(" ");
  const abbreviation = splitedName.map((name: string) => name.charAt(0)).join("");

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DashboardNavbar navButtonHandler={isOpenSidebar} navbarOnclick={() => setIsOpenSidebar(!isOpenSidebar)} />
      <Container size="xl" className="flex mid:relative">
        <aside className={clsx("absolute w-full transition-all duration-300 mid:left-0 max-mid:z-50", isOpenSidebar ? "left-0" : "-left-3/4")}>
          <div className="fixed z-10 h-[calc(100vh_-_var(--header-height)_*_1px)] w-[255px] bg-[#393D42] px-6 pt-6">
            <div>
              <div className="relative mx-auto mb-3 h-[120px] w-[120px] overflow-hidden rounded-full bg-slate-500">
                {icon ? (
                  <Image src={icon} alt="Nayeon" layout="fill" objectFit="cover" objectPosition="center" />
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#2f3237] text-lg">{abbreviation}</div>
                )}
              </div>
              <div className="flex items-center justify-center gap-1">
                <h3 className="truncate text-lg font-semibold">{name}</h3>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {sidebarMenu.map((menu, index) => {
                return (
                  <div key={index}>
                    <span className="text-xs font-semibold uppercase text-[#64748B]">{menu.category}</span>
                    <div className="mt-2 flex flex-col gap-1">
                      {menu.items.map((item, index) => {
                        if (item.disable) {
                          return (
                            <button key={index} className="relative flex cursor-not-allowed items-center gap-2 rounded-lg p-2 text-white hover:bg-[#41454B]">
                              <div
                                onClick={() => {
                                  setIsOpen(true);
                                  setIsOpenSidebar(false);
                                }}
                                className="absolute right-0 top-0 cursor-help rounded bg-light-blue px-1 text-xs font-medium transition-colors hover:bg-[#3f61dd]"
                              >
                                Dev
                              </div>
                              <span className="text-base">{item.icon}</span>
                              <span className="text-sm">{item.label}</span>
                            </button>
                          );
                        }
                        return (
                          <Link key={index} href={`/server/${guildID}/${item.link}`}>
                            <a
                              onClick={() => setIsOpenSidebar(false)}
                              className={clsx(
                                "relative flex cursor-pointer items-center gap-2 rounded-lg p-2 text-white",
                                path === item.link ? "bg-light-blue" : "hover:bg-[#41454B]"
                              )}
                            >
                              <span className="text-base">{item.icon}</span>
                              <span className="text-sm">{item.label}</span>
                            </a>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {isOpenSidebar && <div onClick={() => setIsOpenSidebar(!isOpenSidebar)} className="fixed left-0 top-0 h-screen w-full bg-[#4344441e] backdrop-blur-sm"></div>}
        </aside>
        <article className="relative min-h-[calc(100vh_-_var(--header-height)_*_1px)] w-full pt-6 transition-all duration-300 mid:ml-[300px]">{children}</article>
      </Container>
      <DevResponseModal isOpen={isOpen} handleCancel={() => setIsOpen(false)} />
    </>
  );
}
