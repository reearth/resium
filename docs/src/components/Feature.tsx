 
import React, { PropsWithChildren } from "react";

import styles from "./Feature.module.css";

export function Features({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.features}>{children}</div>;
}

export function Feature({ title, emoji, desc }: { title?: string; emoji?: string; desc?: string }) {
  return (
    <section className={styles.feature}>
      <h3 className={styles.title}>
        <span className={styles.emoji}>{emoji}</span>
        {title}
      </h3>
      <p className={styles.desc}>{desc}</p>
    </section>
  );
}
