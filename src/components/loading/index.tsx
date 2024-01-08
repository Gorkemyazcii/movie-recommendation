import React from "react";
import styles from "./styles.module.css";
export default function Loading() {
  return (
    // <section className={styles.section}>
    //   <div className={styles.shadow}></div>
    //   <div className={styles.bowl}>
    //     <div className={styles.liquid}></div>
    //   </div>
    // </section>
    <div className="min-h-full min-w-full flex items-center justify-center">
      <div className="inline-block w-36 h-36 border-4  border-indigo-800 border-opacity-75 rounded-full border-t-white animate-spin"></div>
    </div>
  );
}
