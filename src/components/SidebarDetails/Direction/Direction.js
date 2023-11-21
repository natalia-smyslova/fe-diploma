import React, { useState } from 'react';

import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
import arrowTo from '../img/arrow-to.svg';
import arrow from '../img/arrow-arrival.svg'

import styles from './Direction.module.scss';

function Direction() {
  const [expanded, setExpanded] = useState(true);
  const expandIcon = expanded ? minus : plus;

  const clickHandler = () => {
    setExpanded(!expanded);
  };

  const exp = (
    <div className={styles.expandBlock}>
      <div className={styles.row}>
        <div className={styles.number}>№ Поезда
          <div className={styles.number__left}>101C</div>
        </div>
        <div className={styles.name}> Название
          <div className={styles.name__left}>Белые ночи</div>
          {/* {train?.train?.name} */}
        </div>
      </div>
      <div className={styles.totalTime}> 9:09
        {/* {secsToTime(train?.duration)} */}
      </div>
      <div className={styles.directions}>
        <div className={styles.top}>
          <div className={styles.direction}>
            <span className={styles.time}> 10:10
              {/* {datetimeToTime(train?.from?.datetime)} */}
            </span>
            <div className={styles.date}> 02.07.2024
              {/* {datetimeToDate(train?.from?.datetime)} */}
            </div>
          </div>

          <div className={styles.arrow}>
            <img src={arrow} alt="иконка - стрелка" />
          </div>

          <div className={`${styles.direction} ${styles.right}`}>
            <span className={styles.time}> 20:40
              {/* {datetimeToTime(train?.to?.datetime)} */}
            </span>
            <span className={styles.date}> 07.07.2024
              {/* {datetimeToDate(train?.to?.datetime)} */}
            </span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.direction}>
            <span className={styles.city}> Москва
              {/* {train?.from?.city?.name} */}
            </span>
            <span className={styles.station}> Станция
              {/* {train?.from?.railway_station_name} */}
            </span>
            <span className={styles.station}>вокзал</span>
          </div>
          <div className={`${styles.direction} ${styles.right}`}>
            <span className={styles.city}> Архангельск
              {/* {train?.to?.city?.name} */}
            </span>
            <span className={styles.station}> Станция
              {/* {train?.to?.railway_station_name} */}
            </span>
            <span className={styles.station}>вокзал</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.section}>
      <div className={styles.wrapperTop}>
        <div className={styles.header}>
          <img src={arrowTo} alt={`стрелка направления - `} />
          <h4 className={styles.header__text}>Туда</h4>
        </div>
        <div className={styles.date}> 08.08.2023
          {/* {datetimeToDate(train?.from?.datetime)} */}
        </div>
        <button
          className={styles.button}
          type="button"
          onClick={clickHandler}
        >
          <img
            className={styles.expand}
            src={expandIcon}
            alt="иконка управления (открыть/закрыть)"
          />
        </button>
      </div>

      {expanded && exp}
    </div>
  )
};

export default Direction;