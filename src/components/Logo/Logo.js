import React from "react";

import classes from "./Logo.module.css";
import BurgerLogo from "../../assets/images/burger.png";

const Logo=()=>{
 return(
    <div className={classes.Logo}>
      <img src={BurgerLogo} alt="Brand Logo"/>
    </div>
 );
}

export default Logo;