import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import trainIcon from './img/train.svg';
import smallArrow from './img/arrow-small.svg';
import clock from './img/clock.svg';
import arrow from './img/arrow.svg';

import styles from './DirectionInfo.module.scss';

function DirectionInfo({ direction }) {
  const train = useSelector(state => state.train.trains[direction]);

  const hours = Math.floor(train.duration / 3600);
  const minutes = Math.floor((train.duration - hours * 3600) / 60);

  return (
    <div className={styles.train}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img src={trainIcon} alt="иконка - поезд" className={styles.icon__left}/>
        </div>
        <div className={styles.left__info}>
          <span className={styles['train-name']}>
            {train.train.name}
          </span>
          <span className={styles['departure-city']}>
            {train.from.city.name}
            <img
              className={styles['departure-arrow']}
              src={smallArrow}
              alt="иконка - стрелка"
            />
          </span>
          <span className={styles['arrival-city']}>
            {train.to.city.name}
          </span>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.middle__wrapper}>
          <span className={styles.time}>
            {dayjs.unix(train.from.datetime).format('HH:mm')}
          </span>
          <span className={styles.city}>{train.from.city.name}</span>
          <span className={styles.station}>
            {train.from.railway_station_name}
          </span>
        </div>
        <div className={styles.img}>
          <img src={arrow} alt="иконка - стрелка" className={styles['arrow-icon']}/>
        </div>
        <div className={styles.middle__wrapper}>
          <span className={styles.time}>
            {dayjs.unix(train.to.datetime).format('HH:mm')}
          </span>
          <span className={styles.city}>{train.to.city.name}</span>
          <span className={styles.station}>
          {train.to.railway_station_name}
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.img}>
          <img src={clock} alt="иконка - часы" className={styles.icon__right}/>
        </div>
        <div className={styles.info}>
          <div className={styles.hours}>{hours} часов</div>
          <div className={styles.minutes}>{minutes}минут</div>
        </div>
      </div>
    </div>
  );
};

export default DirectionInfo;