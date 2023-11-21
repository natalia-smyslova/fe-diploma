import React from 'react';

import currency from '../../img/currency.svg';

import styles from './PopoverCustom.module.scss';

function PopoverItem({ type, numberSeat, priceInfo }) {
  return (
    <div className={styles.item}>
      <div className={styles.type}>{type}</div>
      <span className={styles.seats}>{numberSeat}</span>
      <div className={styles.price}>
        <div className={styles.price__wrapper}>
          <div className={styles.price__number}>{priceInfo}</div>
          <img src={currency} alt="иконка - рубль" />
        </div>
      </div>
    </div>
  )
};

export default PopoverItem;