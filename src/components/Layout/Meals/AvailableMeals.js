import React, { useState } from "react";
import Card from "../../Card/Card";
import MealItem from "./MealItem";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: Math.random(),
      name: "Turubo",
      price: 23,
    },
    {
      id: Math.random(),
      name: "Digaag",
      price: 13.99,
    },
    {
      id: Math.random(),
      name: "Haafayn",
      price: 12.88,
    },
    {
      id: Math.random(),
      name: "Fadiira macaa beed",
      price: 34.88,
    },
  ];
  const [meals, setMeals] = useState(DUMMY_MEALS);
  console.log(meals);
  return (
    <Card>
      <h2 className={styles.title}>Meals you can order</h2>
      <div>
        {meals.map((meal, id) => {
          return <MealItem key={meal.id} meal={meal} />;
        })}
      </div>
    </Card>
  );
};

export default AvailableMeals;
