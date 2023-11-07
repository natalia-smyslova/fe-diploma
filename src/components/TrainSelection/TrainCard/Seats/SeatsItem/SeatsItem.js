import React from 'react';

import styles from './SeatsItem.module.scss';

import currency from '../img/currency.svg';

function SeatsItem() {

  return (
    <div className={styles.card}>
      <span className={styles.type}>Тип</span>
      <span className={styles.seats}>Номер места</span>
      <div className={styles.price}>
        <div className={styles.price__wrapper}>
          <span className={styles.price__start}>от </span>
          <span className={styles.price__number}>
            {/* {Math.min(...priceCombiner())} */}Минимальная цена
          </span>
          <img src={currency} alt="иконка - рубль" />
        </div>
      </div>
    </div>
  )
};

export default SeatsItem;