import React from 'react';

import styles from './Direction.module.scss';

function Direction() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <h6 className={styles.details__title}>Время отбытия</h6>
      </div>
      <div className={styles.details}>
        <h6 className={styles.expanded__header}>Время прибытия</h6>
      </div>
    </div>
  )
};
export default Direction;