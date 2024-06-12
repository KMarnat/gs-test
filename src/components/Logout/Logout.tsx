import Avatar from "../Avatar/Avatar";
import LogoutIcon from "../../assets/logout.svg?react";

const Logout = () => {
  return (
    <div className="logout">
      <Avatar />
      <p className="logout__fullname">Firstname Lastname</p>
      <button>
        <LogoutIcon />
      </button>
    </div>
  );
};

export default Logout;
