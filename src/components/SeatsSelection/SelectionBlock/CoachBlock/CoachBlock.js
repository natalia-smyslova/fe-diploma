import React from 'react';

import CoachInfo from './CoachInfo/CoachInfo';


import styles from './CoachBlock.module.scss';

function CoachBlock() {
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
        </div>
      {/* )} */}
    </div>
  );
};

export default CoachBlock;