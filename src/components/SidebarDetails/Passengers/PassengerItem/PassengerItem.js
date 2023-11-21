import React from 'react';

import rub from './rub.svg';

import passengerTypes from '../../../SeatsSelection/SelectionBlock/passangerTypes';
import styles from './PassangerItem.module.scss';

function PassangerItem({number, type}) {

  const adultsWord = number === 1 ? 'Взрослый' : 'Взрослых';
  // const childrenWord = childrenFormatter(number);
  const childrenWord = 'дети'
  const word = type === passengerTypes.adults ? adultsWord : childrenWord;

  return (
    <div className={styles.row}>
      <div className={styles.passengerType}>{`${number} ${word} `}</div>
      <div className={styles.sum}>
        <span>1846</span>
        <img className={styles.currency} src={rub} alt="иконка - рубль" />
      </div>
    </div>
  );
};

export default PassangerItem;
