import React from "react";
import DOMPurify from "dompurify";
import styles from "./Greeting.module.css";

const Greeting = React.memo(({ message }) => {
  const sanitizedMsg = DOMPurify.sanitize(message);

  return (
    <div className={styles.container}>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: `Hello ${sanitizedMsg}` }}
      />
    </div>
  );
});

export default Greeting;
