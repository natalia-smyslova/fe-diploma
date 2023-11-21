/* eslint-disable consistent-return */

import React from 'react';
import { Popover } from 'antd';

import PopoverCustom from './Popover/PopoverCustom';
import currency from '../img/currency.svg';

import './Popover.scss';
import styles from './SeatsItem.module.scss';

function SeatsItem({ type, seatNumber, priceInfoDeparture, priceInfoArrival }) {

  const getMinPrice = () => {
    // let minPriceDeparture = 0;
    let minPrice;
    let minPriceArrival = 0;
    if (priceInfoArrival !== undefined) {
      minPriceArrival = Math.min.apply(null, Object.values(priceInfoArrival));
    }
    const minPriceDeparture = Math.min.apply({}, Object.values(priceInfoDeparture || {}));
    if (minPriceArrival === 0) {
      minPrice = minPriceDeparture;
    } else {
      minPrice = Math.min(minPriceDeparture, minPriceArrival);
    }
    return minPrice;
  }

  const minPrice = getMinPrice();

  const popoverContent = <PopoverCustom seatNumber={seatNumber} type={type} priceInfoDeparture={priceInfoDeparture} priceInfoArrival={priceInfoArrival} />;


  return (
    <Popover
      overlayClassName="seats"
      content={popoverContent}
      placement="bottom"
    >
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
    </Popover>
  )
};

export default SeatsItem;