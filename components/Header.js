import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classes from "../styles/header.module.scss";

const Header = () => {
  return (
    <nav className={classes.header__navigation}>
      <div className={classes.header__branding}>
        <Link href='/'>noongram</Link>
      </div>

      <div className={classes.header__icon_links}>
        <Link href='/favourites'>
          <FontAwesomeIcon icon={faHeart} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
