import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
  className?: string;
};

function CardLI({ children, className }: MyComponentProps) {
  const defaultClassName =
    "border-5px bg-white radius-lg border-1px border-base-lighter";

  const combinedClassName = `${defaultClassName} ${className || ""}`;

  return <div className={combinedClassName}>{children}</div>;
}

export default CardLI;
