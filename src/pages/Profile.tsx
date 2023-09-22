import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/slices/userSlice";
import { Grid, GridContainer, Table } from "@trussworks/react-uswds";
import PageWrapper from "../Components/UiComponents/PageWrapper";

function Profile() {
  const user = useSelector(selectCurrentUser);

  return (
    <PageWrapper>
      <GridContainer>
        <Grid row>
          <Grid col={9} className="bg-blue">
            Profile Box
          </Grid>
          <Grid col={3}>Adds Box</Grid>
        </Grid>
      </GridContainer>
    </PageWrapper>
  );
}

export default Profile;
