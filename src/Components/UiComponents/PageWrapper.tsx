import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

function PageWrapper({ children }: MyComponentProps) {
  return (
    <div className="height-viewport width-full padding-top-7">{children}</div>
  );
}

export default PageWrapper;
