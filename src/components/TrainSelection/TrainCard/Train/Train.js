import React from 'react';

import train from './img/train.svg';
import arrow from './img/arrow.svg';

import styles from './Train.module.scss';

function Train({
  trainName1,
  departureCity1,
  arrivalCity1,
  trainName2,
  arrivalCity2
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img src={train} alt="иконка поезда" />
      </div>

      <div className={styles['train-name']}>{trainName1}</div>

      <span className={styles['departure-city']}>
        {departureCity1}
        <img
          className={styles['departure-arrow']}
          src={arrow}
          alt="иконка - стрелка"
        />
      </span>

      {/* <span className={styles['arrival-city']}> 
        <img 
          className={styles['departure-arrow']} 
          src={arrow} 
          alt="иконка - стрелка" 
        /> 
      </span> */}
      <span className={styles['arrival-city']}>
        {arrivalCity1}
        {trainName2 && (
          <img
            className={styles['departure-arrow']}
            src={arrow}
            alt="иконка - стрелка"
          />
        )}
      </span>

      {arrivalCity2 && (
        <div className={styles['arrival-city']}>{arrivalCity2}</div>
      )}

      {trainName2 && (
        <div className={styles['train-name']}>{trainName2}</div>
      )}

    </div>
  )
}

export default Train;