import { Card, Grid } from "@trussworks/react-uswds";
import PostGroup from "../Components/Post/PostGroup";
import PageWrapper from "../Components/UiComponents/PageWrapper";
import AddPost from "../Components/Post/AddPost";
import ProfileCard from "../Components/ProfileCard";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/userSlice";

function Dashboard() {
  const user = useSelector(selectCurrentUser);

  console.log("dash", user);
  return (
    <PageWrapper>
      <Grid row className="">
        <Grid col={3}>
          <ProfileCard />
        </Grid>
        <Grid col={6} className="">
          <AddPost />
          <Card></Card>
          <PostGroup />
        </Grid>
        <Grid col={3} className="">
          <Card className="margin-left-2">Ad ...</Card>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default Dashboard;
