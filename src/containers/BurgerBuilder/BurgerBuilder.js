import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const PRICINGS = {
  salad: 0.5,
  bacon: 0.8,
  cheese: 0.7,
  meat: 1.8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing:false
  };
  purchaseContinueHandler=()=>{
    alert("Your Order Has Been Placed, Thank You!");
  }
  purchasingCancelHandler=()=>{
    this.setState({
      purchasing:false
    })
  }
  purchasingHandler=()=>{    
    this.setState({
      purchasing:true
    })
  }
  purchasableHandler = (ingredients) => {
    const purchasable = Object.keys(ingredients)
      .map((ingr) => {
        return ingredients[ingr];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: purchasable > 0
    });
  };
  addIngredientsHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = oldCount + 1;
    let itemPrice = PRICINGS[type];
    let newPrice = this.state.totalPrice + itemPrice;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.purchasableHandler(updatedIngredients);
  };
  removeIngredientsHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let updatedIngredients = {
      ...this.state.ingredients
    };
    if (this.state.ingredients[type] !== 0) {
      updatedIngredients[type] = oldCount - 1;
      let itemPrice = PRICINGS[type];
      let newPrice = this.state.totalPrice - itemPrice;
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });
      this.purchasableHandler(updatedIngredients);
    }
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal clicked={this.purchasingCancelHandler} show={this.state.purchasing}>
          <OrderSummary price={this.state.totalPrice} purchaseCancel={this.purchasingCancelHandler} purchaseSuccess={this.purchaseContinueHandler} ingredients={this.state.ingredients}></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          disabledInfo={disabledInfo}
          removeHandler={this.removeIngredientsHandler}
          addHandler={this.addIngredientsHandler}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.purchasingHandler}
        ></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;
