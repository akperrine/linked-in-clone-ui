import { GridContainer } from "@trussworks/react-uswds";
import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

function PageWrapper({ children }: MyComponentProps) {
  return (
    <div className="height-viewport width-full padding-top-10 display-flex flex-justify-center">
      <GridContainer className="padding-0 linkedin-grid-container">
        {children}
      </GridContainer>
    </div>
  );
}

export default PageWrapper;
