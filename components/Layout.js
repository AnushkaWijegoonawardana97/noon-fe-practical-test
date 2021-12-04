import { Fragment } from "react";
import Header from "./Header";
import classes from "../styles/layout.module.scss";
import MobileNavigation from "./MobileNavigation";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <section className={classes.container}>{children}</section>
      <MobileNavigation />
    </Fragment>
  );
};

export default Layout;
