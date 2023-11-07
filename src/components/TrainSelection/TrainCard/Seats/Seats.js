import React from 'react';

import SeatsItem from './SeatsItem/SeatsItem';

// import food from './img/food.svg';
// import conditioner from './img/conditioner.svg';
// import Wifi from './img/wifi.svg';
// import express from './img/express.svg';

import styles from './Seats.module.scss';


function Seats() {
  const buttonClassNames = `button button-colored ${styles.btn}`;
  
  return (
    <div>
      <SeatsItem />
      <button type="button" className={buttonClassNames}>
        Выбрать места
      </button>
    </div>
  )
};
export default Seats;