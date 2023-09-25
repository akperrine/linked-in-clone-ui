import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/userSlice";
import { Grid, GridContainer } from "@trussworks/react-uswds";
import PageWrapper from "../Components/UiComponents/PageWrapper";
import { User } from "../utils/Types";
import { useLocation } from "react-router-dom";
import backdropPic from "../assets/default-backdrop.png";
import CardLI from "../Components/UiComponents/CardLI";

function Profile() {
  const location = useLocation();
  const profileInfo = location.state as User;
  const user = useSelector(selectCurrentUser);
  return (
    <PageWrapper>
      <GridContainer>
        <Grid row gap="lg">
          <Grid col={9} className="">
            <CardLI className="">
              <div className="bg-black height-10 radius-top-lg overflow-hidden">
                <img
                  alt="background"
                  src={backdropPic}
                  style={{
                    objectFit: "cover",
                  }}
                  className="width-full height-full"
                />
              </div>
              <div>
                <div>
                  <div>
                    <img alt="Profile Pic" />
                  </div>
                </div>
                <div>
                  <div>
                    {profileInfo.firstName} {profileInfo.lastName}
                  </div>
                </div>
                <div>Connections: __</div>
                {!(profileInfo.email === user.email) && (
                  <div>
                    <button>Connect</button>
                  </div>
                )}
              </div>
            </CardLI>
          </Grid>
          <Grid col={3}>
            <CardLI className="">Your ad here ...</CardLI>
          </Grid>
        </Grid>
      </GridContainer>
    </PageWrapper>
  );
}

export default Profile;
