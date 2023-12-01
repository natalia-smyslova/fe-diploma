import React from 'react';

import PersonItem from './PersonItem/PersonItem';

import rub from '../rub.svg';

import styles from './AllPassengersCard.module.scss';

function AllPassengersCard() {
  const buttonClassNames = `button button__transperant-light ${styles.btn}`

  return (
    <div className={styles.card}>
      <div className={styles.header}>Пассажиры</div>
      <div className={styles.info}>
        <div className={styles.left}>
          <PersonItem />
          <PersonItem />
          <PersonItem />
          {/* {passengers?.map((pas) => (
            <PasItem key={pas.id} pas={pas} />
          ))} */}
        </div>
        <div className={styles.right}>
          <div className={styles.sum}>
            <div className={styles.sum__text}>Всего</div>
            <div>
              <span className={styles.amount}>7089</span>
              <img
                className={styles.currency}
                src={rub}
                alt="иконка - рубль"
              />
            </div>
          </div>
          <button className={buttonClassNames} type="button"> Изменить </button>
          {/* {editBtnMaker(links.passengers)} */}
        </div>
      </div>
    </div>
  )
};

export default AllPassengersCard;