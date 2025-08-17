import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return <>
  <div className={styles.container}>
    <div className={styles.loader}>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
    </div>
    <div className={styles.description}>הדף בטעינה... רק עוד כמה שניות</div>
    </div>
  </>
};

export default Loader;