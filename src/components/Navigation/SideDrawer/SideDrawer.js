import React from "react";

import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

const SideDrawer = (props) => {
  let assignedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    assignedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={assignedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
