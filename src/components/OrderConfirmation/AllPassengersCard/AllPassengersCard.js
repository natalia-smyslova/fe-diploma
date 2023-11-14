import React from 'react';

// import PersonItem from './PersonItem/PersonItem';

import styles from './AllPassengersCard.module.scss';

function AllPassengersCard() {

  return (
    <div className={styles.card}>
      <div className={styles.header}>Пассажиры</div>
      <div className={styles.info}>
        <div className={styles.left}>
          павж
          {/* {passengers?.map((pas) => (
            <PasItem key={pas.id} pas={pas} />
          ))} */}
        </div>
        <div className={styles.right}>
          <div className={styles.sum}>
            <span>Всего</span>
            <span>
              <span className={styles.amount}>sum</span>
              <img
                className={styles.currency}
                // src={rub}
                alt="иконка - рубль"
              />
            </span>
          </div>
          gsg
          {/* {editBtnMaker(links.passengers)} */}
        </div>
      </div>
    </div>
  )
};

export default AllPassengersCard;