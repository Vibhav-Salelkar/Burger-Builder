import React from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop clicked={props.clicked} show={props.show}></Backdrop>
      <div style={{ transform: props.show?'translateY(0)':'translateY(-100vh)', opacity: props.show?'1':'0' }} className={classes.Modal}>
        {props.children}
      </div>
    </Aux>
  );
};

export default React.memo(Modal);
