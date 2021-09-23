import React from "react";
import Card from "../../Card/Card";
import styles from "./AvailableMeals.module.css";

const MealItem = ({ meal }) => {
  return (
    <div className="container">
      <div className={styles.item}>
        <h3> {meal.name} </h3>
        <h4 className={styles.price}> $ {meal.price} </h4>
      </div>
      <div className="controls"></div>
    </div>
  );
};

export default MealItem;
