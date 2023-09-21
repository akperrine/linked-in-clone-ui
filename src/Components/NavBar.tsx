import { useSelector } from "react-redux";
import { selectLoginStatus } from "../redux/slices/userSlice";
import { Header } from "@trussworks/react-uswds";

function NavBar() {
  //   const loggedIn = useSelector(selectLoginStatus);

  //   if (!loggedIn) {
  //     return <></>;
  //   }
  return (
    <>
      <Header className="bg-red width-full position-fixed height-5">
        Nav bar
      </Header>
    </>
  );
}

export default NavBar;
