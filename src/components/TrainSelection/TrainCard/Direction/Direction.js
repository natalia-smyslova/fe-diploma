import React from 'react';

import styles from './Direction.module.scss';

// import arrowLeft from '../img/arrow-left.svg';
// import arrowRight from '../img/arrow-right.svg';

function Direction() {
  return (
    <div className={styles.direction}>
      <div className={styles.direction__from}>
        <span className={styles.from__time}>Время отправления</span>
        <span className={styles.from__city}>Город отправления</span>
        <span className={styles.from__station}>Станция отправления</span>
      </div>
      <div className={styles.from__time}>
        <span className={styles.time__time}>Время в пути?</span>
        {/* <div className={styles.time__arrow}>
          <img src={arrow} alt="иконка - стрелка" />
        </div> */}
      </div>
      <div className={styles.direction__to}>
        <span className={styles.to__time}>Время прибытия</span>
        <span className={styles.to__city}>Город прибытия</span>
        <span className={styles.to__station}>Станция прибытия</span>
      </div>
    </div>
  );
};
export default Direction;