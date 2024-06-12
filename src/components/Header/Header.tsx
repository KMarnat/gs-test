import Avatar from "../Avatar/Avatar";
import MoonIcon from "../../assets/moon.svg?react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Chat UI</h1>
      <div className="header__cta">
        <input type="text" name="search" placeholder="Search" />
        <MoonIcon />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
