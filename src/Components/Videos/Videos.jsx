import React from "react";
import styles from "./Videos.module.css";

export default function Videos({
  thumbnail,
  nickname,
  viewCount,
  date,
  title,
}) {
  return (
    <article className={styles.videoWrapper}>
      <div className={styles.videoBox}>
        <img src={thumbnail} alt={nickname} />
      </div>
      <div>
        <div className={styles.profile} />
        <p className={styles.title}>{title}</p>
      </div>
      <div>
        <div className={styles.nickname}>{nickname}</div>
        <p className={styles.description}>
          <span className={styles.viewCount}>{viewCount}</span>
          <span className={styles.date}>{date}</span>
        </p>
      </div>
    </article>
  );
}
