import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import clsx from "~utils/clsx";
import Container from "@layout/container";
import Image from "next/image";
import { LinkProps } from "~types/components";
import Links from "../../other/links";
import headerLists from "~utils/headerLists.json";
import { useContext } from "react";
import AuthContext from "~/contexts/authContext";
import { ProfileMenu } from "./profileMenu";

type DashboardNavbarProps = {
  navbarOnclick: any;
  navButtonHandler: any;
};

export default function DashboardNavbar({ navButtonHandler, navbarOnclick }: DashboardNavbarProps) {
  const userState = useContext(AuthContext);
  const { user, logout } = userState;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const elementRef = useRef(null) as any;

  useEffect(() => {
    const currentHeight = elementRef.current?.clientHeight;
    document.documentElement.style.setProperty("--header-height", currentHeight);

    if (currentHeight > 768) {
      setIsOpen(false);
    }
  }, [elementRef]);

  return (
    <>
      <header ref={elementRef} className="sticky top-0 left-0 z-[51] w-full bg-[#23272A]">
        <Container size="xl" className="mid:flex mid:justify-between">
          <div className="relative z-10 flex w-full items-center justify-between py-2">
            <div className="navButton cursor-pointer mid:hidden" onClick={navbarOnclick}>
              <span className={clsx(navButtonHandler && "translate-y-[10px] rotate-45")}>&nbsp;</span>
              <span className={clsx(navButtonHandler && "opacity-0")}>&nbsp;</span>
              <span className={clsx(navButtonHandler && "translate-y-[-10px] -rotate-45")}>&nbsp;</span>
            </div>
            <div
              id="logo"
              className={clsx(
                "absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 font-bold transition-all duration-300",
                "mid:relative mid:left-0 mid:top-0 mid:translate-x-0 mid:translate-y-0"
              )}
            >
              <Link href="/">
                <a className="whitespace-nowrap text-lg">Nayeon Bot</a>
              </Link>
            </div>
            <nav
              className={clsx(
                "hidden mid:flex",
                "items-center justify-center gap-5 transition-all md:absolute md:left-2/4 md:top-2/4 md:-translate-y-2/4 md:-translate-x-2/4",
                isOpen ? "bg-body max-md:right-0" : "max-md:-right-full"
              )}
            >
              {headerLists.map((item: LinkProps, index: number) => {
                const { text, href, isOutsite } = item;
                return <Links key={index} href={href} className="whitespace-nowrap font-medium transition-colors hover:text-light-blue" text={text} isOutsite={isOutsite} />;
              })}
            </nav>
            <ProfileMenu onLogout={logout} user={user} />
          </div>
        </Container>
      </header>
    </>
  );
}
