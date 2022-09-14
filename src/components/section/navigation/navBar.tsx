import Links from "@other/links";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import headerLists from "~utils/headerLists.json";
import clsx from "~utils/clsx";
import Container from "@layout/container";
import { LinkProps } from "~types/components";
import { useContext } from "react";
import AuthContext from "~/contexts/authContext";
import { ProfileMenu } from "./profileMenu";

export default function Navbar() {
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
        <Container size="xl" className="md:flex md:justify-between">
          <div className="relative z-10 flex items-center justify-between">
            <div id="logo" className={clsx("py-3 font-bold", isOpen && "opacity-0")}>
              <Link href="/">
                <a className="whitespace-nowrap text-lg">Nayeon Bot</a>
              </Link>
            </div>
            <div className="navButton cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <span className={clsx(isOpen && "translate-y-[10px] rotate-45")}>&nbsp;</span>
              <span className={clsx(isOpen && "opacity-0")}>&nbsp;</span>
              <span className={clsx(isOpen && "translate-y-[-10px] -rotate-45")}>&nbsp;</span>
            </div>
          </div>
          <nav
            className={clsx(
              "max-md:fixed max-md:top-0 max-md:h-screen max-md:w-full max-md:flex-col max-md:text-lg",
              "flex items-center justify-center gap-5 transition-all md:absolute md:left-2/4 md:top-2/4 md:-translate-y-2/4 md:-translate-x-2/4",
              isOpen ? "bg-body max-md:right-0" : "max-md:-right-full"
            )}
          >
            {headerLists.map((item: LinkProps, index: number) => {
              const { text, href, isOutsite } = item;
              return <Links key={index} href={href} className="whitespace-nowrap font-medium transition-colors hover:text-light-blue" text={text} isOutsite={isOutsite} />;
            })}
          </nav>
          <div className="flex items-center max-md:hidden">
            {user ? (
              <ProfileMenu onLogout={logout} user={user} />
            ) : (
              <Link href="/login">
                <a className="cursor-pointer rounded-md border-2 border-[#46494D] py-1 px-3 text-sm transition-colors hover:bg-light-blue">Login</a>
              </Link>
            )}
          </div>
        </Container>
      </header>
    </>
  );
}
