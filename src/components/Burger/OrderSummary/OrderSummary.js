import React from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientsList = Object.keys(props.ingredients).map((ingr, index) => {
    return (
      <li key={ingr + index}>
        <span style={{ textTransform: "capitalize" }}>{ingr}: </span>
        {props.ingredients[ingr]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Orders</h3>
      <p>A delecius burger with the following ingredients:</p>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}$</strong>
      </p>
      <ul>{ingredientsList}</ul>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseSuccess}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
