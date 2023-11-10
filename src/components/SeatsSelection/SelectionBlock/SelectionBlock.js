import React from 'react';

import DirectionInfo from './DirectionInfo/DirectionInfo';
import TicketsNumber from './TicketsNumber/TicketsNumber';
import CoachType from './CoachType/CoachType';
import Coaches from './Coaches/Coaches';

// import departureArrow from './img/arrow-departure.svg';
// import arrivalArrow from './img/arrow-arrival.svg';

import styles from './SelectionBlock.module.scss';

function SelectionBlock() {

  const buttonClassNames = `button button__transparent ${styles.btn}`;

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.img}>
          <img alt="иконка - направление" />
        </div>
        <button type="button" className={buttonClassNames}>
          Выбрать другой поезд
        </button>
      </div>
      <DirectionInfo />
      <TicketsNumber />
      <CoachType />
      <Coaches />
      {/* <NumberOfPassengers
        direction={direction}
        adultSeats={adultSeats}
        childrenSeats={childrenSeats}
      />
      <CoachType direction={direction} />
      <Coaches direction={direction} />
      <CoachBlock
        direction={direction}
        NumOfPplView={NumOfPplView}
        adultSeats={adultSeats}
        childrenSeats={childrenSeats}
      />
      <TotalPrice
        direction={direction}
        adultSeats={adultSeats}
        childrenSeats={childrenSeats}
      /> */}
    </div>
  );
};

export default SelectionBlock;