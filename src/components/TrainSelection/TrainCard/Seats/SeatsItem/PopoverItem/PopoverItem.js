import React from 'react';

import currency from '../../img/currency.svg';

import styles from './PopoverItem.module.scss';

function PopoverItem() {
  return (
    <div className={styles.item}>
      <div className={styles.type}>Тип</div>
      <span className={styles.seats}>10</span>
      <div className={styles.price}>
        <div className={styles.price__wrapper}>
          <div className={styles.price__number}>123</div>
          <img src={currency} alt="иконка - рубль" />
        </div>
      </div>
    </div>
  )
};

export default PopoverItem;