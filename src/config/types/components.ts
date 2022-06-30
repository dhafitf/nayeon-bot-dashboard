import { CSSProperties } from "react";
import { ChildrenProps } from "./default";

export interface LayoutProps extends ChildrenProps {
  className?: string;
  style?: CSSProperties;
}

export interface ContainerProps extends ChildrenProps {
  size?: "md" | "lg" | "xl";
  className?: string;
}
