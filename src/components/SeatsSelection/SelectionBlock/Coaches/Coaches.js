import React from 'react';

import CoachItem from './CoachItem/CoachItem';

import styles from './Coaches.module.scss';

function Coaches() {
  return (
    <div className={styles.coaches}>
      <div className={styles.available}>
        <div className={styles.coaches__amount}>Вагоны</div>
        {/* {coachesToDisplay?.map((item) => ( */}
          <CoachItem
            // coachId={item?.coach?._id}
            // direction={direction}
            // key={item?.coach?.name}
            // name={item?.coach?.name}
          />
        {/* // ))} */}
        <span>Ошибка</span>
      </div>
      <span className={styles.text}>
        Нумерация вагонов начинается с головы поезда
      </span>
    </div>
  );

};
export default Coaches;