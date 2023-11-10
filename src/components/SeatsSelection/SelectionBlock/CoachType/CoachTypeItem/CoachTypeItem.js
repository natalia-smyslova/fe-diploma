import React from 'react';

import styles from './CoachTypeItem.module.scss';

function CoachTypeItem() {
  return (
    <button type="button" className={styles.type}>
      <div className={styles.icon}>
        <img alt="иконка" />
      </div>
      <span className={styles.name}>тип вагона</span>
    </button>
  );
};

export default CoachTypeItem;