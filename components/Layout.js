import { Fragment } from "react";
import Header from "./Header";
import classes from "../styles/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* <Header /> */}
      <section className={classes.container}>{children}</section>
    </Fragment>
  );
};

export default Layout;
