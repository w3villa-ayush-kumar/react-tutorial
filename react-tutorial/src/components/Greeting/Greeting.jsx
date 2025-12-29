import React from "react";
import styles from "./Greeting.module.css";

const Greeting = ({ message }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello {message}</h1>
    </div>
  );
};

export default Greeting;
