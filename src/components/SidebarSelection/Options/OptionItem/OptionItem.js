import React from 'react';

import on from './img/on.svg';
// import off from './img/off.svg';

import styles from './OptionItem.module.scss';

function OptionItem({ img, title }) {

  const imgIcon = on;
  // const imgIcon = status ? on : off;

  return (
    <div className={styles.item}>
      <div className={styles.item__left}>
      <img
        className={styles.item__icon}
        src={img}
        alt={`Иконка - ${title}`}
      />
      <div className={styles.item__title}>{title}</div>
      </div>

      <button
        type="button"
        // onClick={clickHandler}
        className={styles.item__status}
      >
        <img src={imgIcon} alt="Иконка - переключатель" />
      </button>
    </div >
  )
};

export default OptionItem;