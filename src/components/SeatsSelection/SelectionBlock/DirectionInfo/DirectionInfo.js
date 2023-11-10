import React from 'react';

import trainIcon from './img/train.svg';
import smallArrow from './img/arrow-small.svg';
import clock from './img/clock.svg';
import arrow from './img/arrow.svg';

import styles from './DirectionInfo.module.scss';

function DirectionInfo() {
  return (
    <div className={styles.train}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img src={trainIcon} alt="иконка - поезд" />
        </div>
        <div className={styles.left__info}>
          <span className={styles['train-name']}>
            Название поезда
          </span>
          <span className={styles['departure-city']}>
            Город отбытия
            <img
              className={styles['departure-arrow']}
              src={smallArrow}
              alt="иконка - стрелка"
            />
          </span>
          <span className={styles['arrival-city']}>
            Поезд
          </span>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.middle__wrapper}>
          <span className={styles.time}>
            Время
          </span>
          <span className={styles.city}>Поезд</span>
          <span className={styles.station}>
            вокзал
          </span>
        </div>
        <div className={styles.img}>
          <img src={arrow} alt="иконка - стрелка" />
        </div>
        <div className={styles.info}>
          <span className={styles.time}>
            Время
          </span>
          <span className={styles.city}>Поезд</span>
          <span className={styles.station}>
            вокзал
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.img}>
          <img src={clock} alt="иконка - часы" />
        </div>
        <div className={styles.info}>
          <span>Часы</span>
          <span>Минуты</span>
        </div>
      </div>
    </div>
  );
};

export default DirectionInfo;