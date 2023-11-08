import React from 'react';

import styles from './Direction.module.scss';

// import arrowLeft from '../img/arrow-left.svg';
// import arrowRight from '../img/arrow-right.svg';

function Direction({ departureTime, departureCity, departureStation, duration, arrivalTime, arrivalCity, arrivalStation }) {
  return (
    <div className={styles.direction}>
      <div className={styles.direction__from}>
        <span className={styles.from__time}>{departureTime}</span>
        <span className={styles.from__city}>{departureCity}</span>
        <span className={styles.from__station}>{departureStation}</span>
      </div>
      <div className={styles.from__time}>
        <span className={styles.time__time}>{duration}</span>
        {/* <div className={styles.time__arrow}>
          <img src={arrow} alt="иконка - стрелка" />
        </div> */}
      </div>
      <div className={styles.direction__to}>
        <span className={styles.to__time}>{arrivalTime}</span>
        <span className={styles.to__city}>{arrivalCity}</span>
        <span className={styles.to__station}>{arrivalStation}</span>
      </div>
    </div>
  );
};
export default Direction;