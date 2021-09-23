import React from "react";
import styles from "./HeaderBtn.module.css";
const HeaderButton = () => {
  return (
    <button>
      <span>Your Cart</span>
      <span className={styles.badge}> 3</span>
    </button>
  );
};

export default HeaderButton;
