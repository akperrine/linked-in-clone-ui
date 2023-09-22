import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/userSlice";
import { Grid, GridContainer } from "@trussworks/react-uswds";
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
