import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controlList = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p className={classes.Price}>Current Price: <strong>{props.price.toFixed(2)}$</strong></p>
      {controlList.map((item, index) => {
        return (
          <BuildControl
            key={item.type + index}
            removed={() => props.removeHandler(item.type)}
            added={() => props.addHandler(item.type)}
            label={item.label}
            disabled={props.disabledInfo[item.type]}
          ></BuildControl>
        );
      })}
      <button onClick={props.purchasing} disabled={!props.purchasable} className={classes.OrderButton}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
