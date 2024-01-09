import React from "react";
import styles from "./styles.module.css";

export default function Skeleton({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
}
