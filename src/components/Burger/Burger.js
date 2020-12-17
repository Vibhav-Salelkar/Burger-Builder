import React from "react";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((ingKey) => {
    return [...Array(props.ingredients[ingKey])].map((_, index) => {
      return (
        <BurgerIngredients
          key={ingKey + index}
          type={ingKey}
        ></BurgerIngredients>
      );
    });
  });
  const isEmpty=transformedIngredients.reduce((arr,el)=>{
    return arr.concat(el)
  },[]);
  
  if(isEmpty.length===0){
    transformedIngredients=<p>Please start adding ingredients</p>
  }  
  //Above code basically creates array of keys that is ingredient name
  //and now we want to display ingredient the times it is used in burger
  //so using each item in array we access value of that key and that value is nothing
  //but tells how many times we want that item
  //so we create empty array that have same number(value) of elements.
  //So now using first return and use this
  //array just to iterate that number of times and pass same item thats why we are
  //not interested in item of that array
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"></BurgerIngredients>
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom"></BurgerIngredients>
    </div>
  );
};

export default Burger;
