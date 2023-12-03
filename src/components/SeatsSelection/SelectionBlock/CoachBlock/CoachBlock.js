import React from 'react';

import CoachInfo from './CoachInfo/CoachInfo';

import CoachScheme from './CoachScheme/CoachScheme';

import classes from '../../classes';

import styles from './CoachBlock.module.scss';

function CoachBlock() {

  let prices;
  // switch (coach?.coach?.class_type) {
    switch ('fourth') {
    case classes.first:
      prices = 10000;
      // prices = { bottom: coach?.coach?.price };
      break;
    case classes.second:
      prices = {
        top: 1234,
        bottom: 4321,
        // top: coach?.coach?.top_price,
        // bottom: coach?.coach?.bottom_price,
      };
      break;
    case classes.third:
      prices = {
        bottom: 1550,
        top: 1650,
        side: 587
        // bottom: coach?.coach?.bottom_price,
        // top: coach?.coach?.top_price,
        // side: coach?.coach?.side_price,
      };
      break;
    default:
      prices = 1111;
      // prices = { bottom: coach?.coach?.bottom_price };
  }


  return (
    <div className={styles.coaches}>
      <CoachInfo
      // adultSeats={adultSeats}
      // childrenSeats={childrenSeats}
      // key={coach.name}
      // className={classMaker(index)}
      // direction={direction}
      // NumOfPplView={NumOfPplView}
      // coachName={coach.name}
      />
      {/* {activeCoaches.length > 0 &&
        activeCoaches.map((coach, index) => (
          <CoachInfo
            adultSeats={adultSeats}
            childrenSeats={childrenSeats}
            key={coach.name}
            className={classMaker(index)}
            direction={direction}
            NumOfPplView={NumOfPplView}
            coachName={coach.name}
          />
        ))} */}
      {/* {activeCoaches.length === 0 && ( */}
      <div className={styles.noCoach}>
        Выберите вагон для отображения схемы
        <CoachScheme
          classType='fourth'
          prices={prices}
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default CoachBlock;