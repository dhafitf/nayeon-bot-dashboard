import clsx from "~/utils/clsx";
import { ContainerProps } from "~types/components";

export default function Container(props: ContainerProps) {
  const { size, className, children } = props;

  function containerSize() {
    switch (size) {
      case "md":
        return "max-w-[840px] mid:m-auto";
      case "lg":
        return "max-w-[1240px] lg:m-auto";
      case "xl":
        return "max-w-[1440px] xl:m-auto";
      default:
        return "max-w-[1440px] xl:m-auto";
    }
  }

  return <div className={clsx(containerSize(), className, "mx-5")}>{children}</div>;
}
