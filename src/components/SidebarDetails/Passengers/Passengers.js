import React, { useState } from 'react';

import passenger from './img/passenger.svg';

import plus from '../img/plus.svg';
import minus from '../img/minus.svg';

import styles from './Passengers.module.scss';

function Passengers() {

  const [expanded, setExpanded] = useState(true);
  const expandIcon = expanded ? minus : plus;
  const clickHandler = () => {
    setExpanded(!expanded);
  };

  const exp = (
    <div className={styles.expandBlock}>
      <div className={styles.direction}>Туда</div>
      <div className={styles.passengers}> Пассажиры
        {/* <PassengersRow
          className={styles.row}
          number={numOfAdultsDep}
          sum={sumDepAdults}
          type={passengerTypes.adults}
        />
        {numOfChildrenDep > 0 && childrenDep} */}
      </div>
{/* 
      {numOfAdultsArr + numOfChildrenArr > 0 && ( */}
        {/* <> */}
          <div className={styles.direction}>Обратно</div>
          <div className={styles.passengers}> Пассажиры
            {/* <PassengersRow
              className={styles.row}
              number={numOfAdultsArr}
              sum={sumArrAdults}
              type={passengerTypes.adults}
            />
            {numOfChildrenArr > 0 && childrenArr} */}
          </div>
        {/* </> */}
      {/* )} */}
    </div>
  );

  return (
    <div className={styles.section}>
      <div className={styles.top}>
        <h4 className={styles.header}>
          <img src={passenger} alt="иконка - пассажир" />
          <span className={styles.header__text}>Пассажиры</span>
        </h4>

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

export default Passengers;