import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

function PreAuthWrapper({ children }: MyComponentProps) {
  return (
    <div className="height-viewport width-full bg-white display-flex flex-align-center flex-justify-center">
      {children}
    </div>
  );
}

export default PreAuthWrapper;
