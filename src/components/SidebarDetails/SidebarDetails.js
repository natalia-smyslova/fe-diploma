import React from 'react';

import styles from './SidebarDetails.module.scss';


function SidebarDetails() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.section}>
        <h3 className={styles.title}> Детали поездки</h3>
      </div>
      {/* <div className={styles.section}>
        <Direction direction={directions.departure} />
      </div>
      {sumArrAdults + sumArrChildren > 0 && (
        <div className={styles.section}>
          <Direction direction={directions.arrival} />
        </div>
      )}
      <div className={styles.section}>
        <Passengers
          sumDepAdults={sumDepAdults}
          sumDepChildren={sumDepChildren}
          sumArrAdults={sumArrAdults}
          sumArrChildren={sumArrChildren}
        />
      </div> */}
      {/* <div className={`${styles.section} ${styles.total}`}> */}
        <h4 className={styles.total}>Итог</h4>
        {/* <div className={styles.sum}>
          <span>
            {sumDepAdults +
              sumDepChildren +
              sumArrAdults +
              sumArrChildren}
          </span> */}
          <img
            className={styles.currency}
            // src={rub}
            alt="иконка - рубль"
          />
        {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default SidebarDetails;