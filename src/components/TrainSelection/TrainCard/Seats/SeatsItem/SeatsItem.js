import React from 'react';

import styles from './SeatsItem.module.scss';

import currency from '../img/currency.svg';

function SeatsItem({ type, seatNumber, priceFrom }) {

  return (
    <div className={styles.card}>
      <span className={styles.type}>{type}</span>
      <span className={styles.seats}>{seatNumber}</span>
      <div className={styles.price}>
        <div className={styles.price__wrapper}>
          <span className={styles.price__start}>от </span>
          <span className={styles.price__number}>
            {/* {Math.min(...priceCombiner())} */}
            {priceFrom}
          </span>
          <img src={currency} alt="иконка - рубль" />
        </div>
      </div>
    </div>
  )
};

export default SeatsItem;