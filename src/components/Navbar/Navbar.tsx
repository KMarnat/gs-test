import PagesIcon from "../../assets/pages.svg?react";
import LockIcon from "../../assets/lock.svg?react";

interface NavbarProps {
  locked: boolean;
  title: string;
  listItems: string[];
}

const Navbar: React.FC<NavbarProps> = ({ locked, title, listItems }) => {
  return (
    <nav className="navbar">
      {locked ? <LockIcon /> : <PagesIcon />}
      <ul className={`navbar__list ${locked && "navbar--locked"}`}>
        <li className={locked ? "" : "lead"}>{title}</li>
        {listItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {locked && <span className="pro">PRO</span>}
    </nav>
  );
};

export default Navbar;
