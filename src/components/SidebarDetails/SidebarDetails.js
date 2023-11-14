import React from 'react';

import Direction from './Direction/Direction';
import Passengers from './Passengers/Passengers';

import rub from './img/rub.svg';

import styles from './SidebarDetails.module.scss';


function SidebarDetails() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.section}>
        <h3 className={styles.title}> Детали поездки</h3>
      </div>
      <div className={styles.direction__to}>
        <Direction />
      </div>
      {/* {sumArrAdults + sumArrChildren > 0 && ( */}
      <div className={styles.direction__back}>
        <Direction />
      </div>
      {/* )} */}
      <div className={styles.section}>
        <Passengers
        // sumDepAdults={sumDepAdults}
        // sumDepChildren={sumDepChildren}
        // sumArrAdults={sumArrAdults}
        // sumArrChildren={sumArrChildren}
        />
      </div>
      <div className={styles.section__total}>
        <h4 className={styles.total__text}>Итог</h4>
        <div className={styles.sum}>
          <div className={styles.amount}>3838</div>
          <img
            className={styles.currency}
            src={rub}
            alt="иконка - рубль"
          />
        </div>
      </div>
      {/* <div className={`${styles.section} ${styles.total}`}>
        <h4 className={styles.total}>Итог</h4>
        {/* <div className={styles.sum}>
          <span>
            {sumDepAdults +
              sumDepChildren +
              sumArrAdults +
              sumArrChildren}
          </span> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default SidebarDetails;