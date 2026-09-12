import React from "react";
import styles from "./styles.module.css";

export default function Skeleton({
  width,
  height,
  className = "",
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
}) {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width, height }}
    ></div>
  );
}
