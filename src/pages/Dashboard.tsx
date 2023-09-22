import PostGroup from "../Components/Post/PostGroup";
import PageWrapper from "../Components/UiComponents/PageWrapper";

function Dashboard() {
  return (
    <PageWrapper>
      <div className="padding-5">
        <PostGroup />
      </div>
    </PageWrapper>
  );
}

export default Dashboard;
