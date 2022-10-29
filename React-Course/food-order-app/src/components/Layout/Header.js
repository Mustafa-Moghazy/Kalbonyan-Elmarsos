import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Taple of meals"></img>
      </div>
    </Fragment>
  );
};

export default Header;
