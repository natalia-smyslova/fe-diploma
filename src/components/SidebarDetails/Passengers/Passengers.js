import React, { useState } from 'react';

import PassangerItem from './PassengerItem/PassengerItem';

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
    <div className={styles.expand__block}>
      <div className={styles.passengers}>
        <PassangerItem
          // className={styles.row}
          number={3}
          sum={5}
          type='adults'
        />
        {/* {numOfChildrenDep > 0 && childrenDep} */}
      </div>
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