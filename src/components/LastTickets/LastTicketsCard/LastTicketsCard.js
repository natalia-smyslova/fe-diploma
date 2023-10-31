import React from 'react';

import styles from './LastTicketsCard.module.scss';

import wifi from './icons/wifi.svg';
import rub from './icons/rub.svg';
import food from './icons/food.svg';
import express from './icons/express.svg';
import conditioner from './icons/conditioner.svg';

function LastTicketsCard({ ticket }) {

  const wifiImg = (
    <div className={styles.icons__content}>
      <img src={wifi} alt="wifi" />
    </div>
  );
  const conditionerImg = (
    <div className={styles.icons__content}>
      <img src={conditioner} alt="кондиционер" />
    </div>
  );
  const expressImg = (
    <div className={styles.icons__content}>
      <img src={express} alt="экспресс" />
    </div>
  )

  return (
    <div className={styles.card}>
      <div className={styles.card__firstWrapper}>
        <div className={`${styles.direction} ${styles.direction__from}`}>
          <span className={styles.direction__city}>{ticket.from.city}</span>
          <span className={styles.direction__station}>
            {ticket.from.station}
          </span>
        </div>
        <div className={`${styles.direction} ${styles.direction__to}`}>
          <span className={styles.direction__city}>{ticket.to.city}</span>
          <span className={styles.direction__station}>
            {ticket.to.station}
          </span>
        </div>
      </div>
      <div className={styles.card__secondWrapper}>
        <div className={styles.icons}>
          {ticket.icons.wifi && wifiImg}

          {ticket.icons.conditioner && conditionerImg}

          {ticket.icons.express && expressImg}
          <div className={styles.icons__content}>
            <img src={food} alt="еда" />
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.price__wrapper}>
            <span className={styles.price__start}>от</span>
            <span className={styles.price__number}>{ticket.price}</span>
            <img
              className={styles.price__currency}
              src={rub}
              alt="рубль"
            />
          </div>
        </div>
      </div>


    </div>
  );

};

export default LastTicketsCard;