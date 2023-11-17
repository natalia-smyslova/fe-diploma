/* eslint-disable consistent-return */

import React from 'react';

import styles from './SeatsItem.module.scss';

import currency from '../img/currency.svg';

function SeatsItem({ type, seatNumber, priceInfoDeparture, priceInfoArrival }) {
  const getMinPrice = () => {
    if (priceInfoDeparture) {
      const minPriceDeparture = Math.min.apply(null, Object.values(priceInfoDeparture));
      return minPriceDeparture;
    }

    if (priceInfoArrival) {
      const minPriceArrival = Math.min.apply(null, Object.values(priceInfoArrival));
      return minPriceArrival;
    }

    return Math.min.apply(null, minPriceDeparture, minPriceArrival);
  }

  const minPrice = getMinPrice();

  return (
    <div className={styles.card}>
      <div className={styles.type}>{type}</div>
      <div className={styles.seats}>{seatNumber}</div>
      <div className={styles.price}>
        <div className={styles.price__wrapper}>
          <div className={styles.price__start}>от </div>
          <div className={styles.price__number}>
            {minPrice}
          </div>
          <img src={currency} alt="иконка - рубль" />
        </div>
      </div>
    </div>
  )
};

export default SeatsItem;