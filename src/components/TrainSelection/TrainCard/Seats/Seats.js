import React from 'react';
import { useNavigate } from 'react-router-dom';

import links from '../../../../utils/constants/links';
import SeatsItem from './SeatsItem/SeatsItem';

// import food from './img/food.svg';
// import conditioner from './img/conditioner.svg';
// import Wifi from './img/wifi.svg';
// import express from './img/express.svg';

import styles from './Seats.module.scss';

function Seats({ availableSeats, priceInfo }) {
  const navigate = useNavigate();

  function clickHandler () {
    navigate(links.seats);
  }

  const buttonClassNames = `button button-colored ${styles.btn}`;
  
  return (
    <div>
      {availableSeats?.fourth && (
        <SeatsItem type="Сидячий" seatNumber={availableSeats.fourth} priceInfo={priceInfo?.fourth} />
      )}

      {availableSeats?.third && (
        <SeatsItem type="Плацкарт" seatNumber={availableSeats.third} priceInfo={priceInfo?.third} />
      )}

      {availableSeats?.second && (
        <SeatsItem type="Купе" seatNumber={availableSeats.second} priceInfo={priceInfo?.second} />
      )}

      {availableSeats?.first && (
        <SeatsItem type="Люкс" seatNumber={availableSeats.first} priceInfo={priceInfo?.first} />
      )}

      <button onClick={clickHandler} type="button" className={buttonClassNames}>
        Выбрать места
      </button>
    </div>
  )
};
export default Seats;