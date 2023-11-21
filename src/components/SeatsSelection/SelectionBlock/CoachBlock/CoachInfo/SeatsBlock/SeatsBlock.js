import React from 'react';

import styles from './SeatcsBlock.module.scss';

function SeatsBlock() {
  const top = (
    <div className={styles.details}>
      <div className={styles.seats__type}>Верхние</div>
      <div className={styles.seats__number}>
        5
        {/* {numOfTop === -1 ? 0 : numOfTop} */}
      </div>
    </div>
  );

  const bottom = (
    <div className={styles.details}>
      <div className={styles.seats__type}>Нижние</div>
      {/* {(coach?.coach?.class_type === classes.first ||
        coach?.coach?.class_type === classes.fourth) && ( */}
      <div className={styles.seats__number}>23
        {/* {numOfSeats} */}
      </div>
      {/* )} */}
      {/* {(coach?.coach?.class_type === classes.second ||
        coach?.coach?.class_type === classes.third) && ( */}
      {/* <div className={styles.seats__number}>
        
        {numOfBottom === -1 ? 0 : numOfBottom}
      </div> */}
      {/* )} */}
    </div>
  );

  const side = (
    <div className={styles.details}>
      <div className={styles.seats__type}>Боковые</div>
      <div className={styles.seats__number}>
        8
        {/* {numOfSide === -1 ? 0 : numOfSide} */}
      </div>
    </div>
  );
  return (
    <>
      {/* {(coach?.coach?.class_type === classes.second ||
        coach?.coach?.class_type === classes.third) &&
        numOfTop > 0 && */}
      {top}
      {/* {numOfBottom > 0 &&  */}
      {bottom}
      {/* {coach?.coach?.class_type === classes.third && numOfSide > 0 &&  */}
      {side}
    </>
  );
}

export default SeatsBlock;