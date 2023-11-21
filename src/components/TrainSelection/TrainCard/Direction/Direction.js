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

  const hours1 = Math.floor(duration1 / 3600); 
  const minutes1 = Math.floor((duration1 - hours1 * 3600) / 60); 
  const hours2 = Math.floor(duration2 / 3600); 
  const minutes2 = Math.floor((duration2 - hours2 * 3600) / 60);

  return (
  <div className={styles.wrapper}>
    <div className={styles.direction__first}>
      <div className={styles.direction__from}>
        <div className={styles.from__time}>{departureTime1}</div>
        <div className={styles.from__city}>{departureCity1}</div>
        <div className={styles.from__station}>{departureStation1}</div>
      </div>
      <div className={styles.from__time}>
        <span className={styles.time__time}>{hours1} : {minutes1}</span>
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
          <span className={styles.time__time}>{hours2} : {minutes2}</span>
          <div className={styles.time__arrow}>
            <img src={arrowLeft} alt="иконка - стрелка" />
          </div>
        </div>
        <div className={styles.direction__to}>
          <div className={styles.to__time}>{arrivalTime2}</div>
          <div className={styles.to__city}>{arrivalCity2}</div>
          <div className={styles.to__station}>{arrivalStation2}</div>
        </div>
      </div>
    )}
  </div>
  );
};
export default Direction;