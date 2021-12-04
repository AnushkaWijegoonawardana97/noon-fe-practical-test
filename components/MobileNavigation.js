import {
  faHeart,
  faHome,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import classes from "../styles/mobilenvaigation.module.scss";

const MobileNavigation = () => {
  return (
    <div className={classes.mobile__navigations}>
      <Link href='/'>
        <a className={classes.mobile__navigations_link}>
          <FontAwesomeIcon icon={faHome} />
        </a>
      </Link>

      <Link href='/favourites'>
        <a className={classes.mobile__navigations_link}>
          <FontAwesomeIcon icon={faHeart} />
        </a>
      </Link> 

      <Link href='/new-post'>
        <a className={classes.mobile__navigations_link}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </a>
      </Link>
    </div>
  );
};

export default MobileNavigation;
