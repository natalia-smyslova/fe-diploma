import React from 'react';

import styles from './SeatsItem.module.scss';

import currency from '../img/currency.svg';

function SeatsItem({ type, seatNumber, priceInfo }) {
  const getMinPrice = () => {
    if (priceInfo) {
      return Math.min.apply(null, Object.values(priceInfo));
    }
  }

  const minPrice = getMinPrice();

  return (
    <div className={styles.card}>
      <span className={styles.type}>{type}</span>
      <span className={styles.seats}>{seatNumber}</span>
      <div className={styles.price}>
        <div className={styles.price__wrapper}>
          <span className={styles.price__start}>от </span>
          <span className={styles.price__number}>
            {minPrice}
          </span>
          <img src={currency} alt="иконка - рубль" />
        </div>
      </div>
    </div>
  )
};

export default SeatsItem;