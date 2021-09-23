import React from "react";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <>
      <header>
        <h2>React Meals</h2>
        <HeaderButton />
      </header>
      <div className={styles.mainImage}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
