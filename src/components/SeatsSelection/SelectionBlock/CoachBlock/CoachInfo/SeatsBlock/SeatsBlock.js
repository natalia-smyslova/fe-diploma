import React from 'react';

import styles from './SeatcsBlock.module.scss';

function SeatsBlock({ coach, numberOfSideSeats, numberOfTopSeats, numberOfBottomSeats, numberOfAllSeats }) {

  const topSeats = (
    <div className={styles.details}>
      <div className={styles.seats__type}>Верхние</div>
      <div className={styles.seats__number}>{numberOfTopSeats === -1 ? 0 : numberOfTopSeats}</div>
    </div>
  );

  const bottomSeats = (
    <div className={styles.details}>
      <div className={styles.seats__type}>Нижние</div>
      {(coach?.coach?.class_type === 'first' ||
        coach?.coach?.class_type === 'fourth') && (
      <div className={styles.seats__number}>{numberOfAllSeats}</div>
      )}
      {(coach?.coach?.class_type === 'second' ||
        coach?.coach?.class_type === 'third') && (
      <div className={styles.seats__number}>{numberOfBottomSeats === -1 ? 0 : numberOfBottomSeats}</div>
      )}
    </div>
  );

  const sideSeats = (
    <div className={styles.details}>
      <div className={styles.seats__type}>Боковые</div>
      <div className={styles.seats__number}>{numberOfSideSeats === -1 ? 0 : numberOfSideSeats}</div>
    </div>
  );

  return (
    <>
      {numberOfTopSeats > 0 && (
        coach.coach.class_type === 'second' ||
        coach.coach.class_type === 'third'
      ) && topSeats}

      {(numberOfBottomSeats > 0) && bottomSeats}

      {numberOfSideSeats > 0 && coach.coach.class_type === 'third' && sideSeats}
    </>
  );
}

export default SeatsBlock;