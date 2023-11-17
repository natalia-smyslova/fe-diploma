import React from 'react';
import { useNavigate } from 'react-router-dom';

import DirectionInfo from './DirectionInfo/DirectionInfo';
import TicketsNumber from './TicketsNumber/TicketsNumber';
import CoachType from './CoachType/CoachType';
import Coaches from './Coaches/Coaches';

import links from '../../../utils/constants/links';

import departureArrow from './img/arrow-departure.svg';
import arrivalArrow from './img/arrow-arrival.svg';

import styles from './SelectionBlock.module.scss';

function SelectionBlock({ direction }) {
  const navigate = useNavigate();

  const buttonClassNames = `button button__transperant-light ${styles.btn}`;

  const buttonClickHandler = () => {
    navigate(links.trains);
  }

  const img = direction === 'departure' ? departureArrow : arrivalArrow;

  return (
    <div className={styles.card}>
      <div className={(direction === 'departure') ? styles.header__departure : styles.header__arrival}>
        <div className={styles.img}>
          <img alt="иконка - направление" src={img}/>
        </div>
        <button type="button" className={buttonClassNames} onClick={buttonClickHandler}>
          Выбрать другой поезд
        </button>
      </div>
      <DirectionInfo direction={direction} />
      <TicketsNumber direction={direction} />
      <CoachType direction={direction} />
      <Coaches direction={direction} />
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