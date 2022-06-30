import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import headerLists from "~utils/headerLists.json";
import clsx from "~utils/clsx";
import Container from "@layout/container";
import InviteButton from "@other/inviteButton";

export default function Header() {
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
            <div className="navButton md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <span className={clsx(isOpen && "translate-y-[10px] rotate-45")}>&nbsp;</span>
              <span className={clsx(isOpen && "opacity-0")}>&nbsp;</span>
              <span className={clsx(isOpen && "translate-y-[-10px] -rotate-45")}>&nbsp;</span>
            </div>
          </div>
          <nav
            className={clsx(
              "max-md:fixed max-md:top-0 max-md:h-screen max-md:w-full max-md:flex-col max-md:text-lg",
              "flex items-center justify-center gap-5 transition-all",
              isOpen ? "right-0 bg-body" : "-right-full"
            )}
          >
            {headerLists.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  <a className="hover:text-main-color whitespace-nowrap hover:underline">{item.name}</a>
                </Link>
              );
            })}
            <InviteButton />
          </nav>
        </Container>
      </header>
    </>
  );
}
