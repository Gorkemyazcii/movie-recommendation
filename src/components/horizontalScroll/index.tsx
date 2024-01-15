import React, { ReactNode } from "react";
import styles from "./styles.module.css";

export default function HorizontalScroll({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles.horizontalScroll}>{children}</div>;
}
