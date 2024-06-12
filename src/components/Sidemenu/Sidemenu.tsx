import Logo from "../../assets/logo.svg?react";
import Logout from "../Logout/Logout";
import Navbar from "../Navbar/Navbar";
import StarsIcon from "../../assets/stars.svg?react";

const Sidemenu = () => {
  return (
    <aside className="sidemenu">
      <div className="sidemenu__logo">
        <Logo />
      </div>
      <div className="menus">
        <div className="menus__chat">
          <StarsIcon />
          <p className="lead">Chat UI</p>
        </div>
        <Navbar
          locked={false}
          title={"Other Pages"}
          listItems={["Prompt Page", "Register", "Sign in"]}
        />
        <Navbar
          locked={true}
          title={"Admin Pages"}
          listItems={["All Templates", "New Template", "Edit Template", "Users Overview"]}
        />
      </div>
      <Logout />
    </aside>
  );
};

export default Sidemenu;
