import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/userSlice";
import { Grid, GridContainer } from "@trussworks/react-uswds";
import PageWrapper from "../Components/UiComponents/PageWrapper";
import { User } from "../utils/Types";
import { useLocation } from "react-router-dom";

// function Profile({ profileInfo }: ProfileProps) {
function Profile() {
  const location = useLocation();
  const profileInfo = location.state as User;
  // const user = useSelector(selectCurrentUser);
  return (
    <PageWrapper>
      <GridContainer>
        <Grid row>
          <Grid col={9} className="bg-blue">
            Profile Box
            {" " + profileInfo.firstName}
          </Grid>
          <Grid col={3}>Your ad here</Grid>
        </Grid>
      </GridContainer>
    </PageWrapper>
  );
}

export default Profile;
