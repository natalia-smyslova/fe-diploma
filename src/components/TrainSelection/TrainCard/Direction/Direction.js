import React from 'react';

import styles from './Direction.module.scss';

import arrowLeft from '../img/arrow-left.svg';
import arrowRight from '../img/arrow-right.svg';

function Direction({
  departureTime1,
  departureCity1,
  departureStation1,
  duration1,
  arrivalTime1,
  arrivalCity1,
  arrivalStation1,
  departureTime2,
  departureCity2,
  departureStation2,
  duration2,
  arrivalTime2,
  arrivalCity2,
  arrivalStation2
}) {
  return (
  <div className={styles.wrapper}>
    <div className={styles.direction__first}>
      <div className={styles.direction__from}>
        <span className={styles.from__time}>{departureTime1}</span>
        <span className={styles.from__city}>{departureCity1}</span>
        <span className={styles.from__station}>{departureStation1}</span>
      </div>
      <div className={styles.from__time}>
        <span className={styles.time__time}>{duration1}</span>
        <div className={styles.time__arrow}>
          <img src={arrowRight} alt="иконка - стрелка" />
        </div>
      </div>
      <div className={styles.direction__to}>
        <span className={styles.to__time}>{arrivalTime1}</span>
        <span className={styles.to__city}>{arrivalCity1}</span>
        <span className={styles.to__station}>{arrivalStation1}</span>
      </div>
    </div>
    {departureCity2 && (
      <div className={styles.direction__second}>
        <div className={styles.direction__from}>
          <span className={styles.from__time}>{departureTime2}</span>
          <span className={styles.from__city}>{departureCity2}</span>
          <span className={styles.from__station}>{departureStation2}</span>
        </div>
        <div className={styles.from__time}>
          <span className={styles.time__time}>{duration2}</span>
          <div className={styles.time__arrow}>
            <img src={arrowLeft} alt="иконка - стрелка" />
          </div>
        </div>
        <div className={styles.direction__to}>
          <span className={styles.to__time}>{arrivalTime2}</span>
          <span className={styles.to__city}>{arrivalCity2}</span>
          <span className={styles.to__station}>{arrivalStation2}</span>
        </div>
      </div>
    )}
  </div>
  );
};
export default Direction;