import React from 'react';

import train from './img/train.svg';
import arrow from './img/arrow.svg';

import styles from './Train.module.scss';

function Train() {
  return (
    <>
      <div className={styles.img}>
        <img src={train} alt="иконка поезда" />
      </div>
      <span className={styles['train-name']}>Имя поезда</span>
      <span className={styles['departure-city']}>
        <img
          className={styles['departure-arrow']}
          src={arrow}
          alt="иконка - стрелка"
        />
      </span>
      <span className={styles['arrival-city']}>
        <img
          className={styles['departure-arrow']}
          src={arrow}
          alt="иконка - стрелка"
        />
      </span>
      <span className={styles['arrival-city']}>Город прибытия</span>
      <span className={styles['train-name']}>Имя поезда</span>
    </>
  );
};

export default Train;