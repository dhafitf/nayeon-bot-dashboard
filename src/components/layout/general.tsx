import { LayoutProps } from "~types/components";
import Navbar from "@section/navigation/navBar";
import FooterSection from "@section/footerSection";
import clsx from "~utils/clsx";

export default function GeneralPage(props: LayoutProps) {
  const { children, className, style } = props;
  return (
    <>
      <div id="layout_content" className={clsx(className)} style={style}>
        <Navbar />
        <main id="main" className="screenNoHeader">
          {children}
        </main>
        <FooterSection />
      </div>
    </>
  );
}
