import React from 'react';

import rub from './rub.svg';

import styles from './PricesBlock.module.scss';

function PricesBlock() {
  const topPrice = (
    <div className={styles.price__amount}>
      <div className={styles.price__number}>
        {/* {coach?.coach?.top_price} */}
        1234
      </div>
      <div className={styles.currency}>
        <img src={rub} alt="иконка - руб." />
      </div>
    </div>
  );

  const bottomPrice = (
    <div className={styles.price__amount}>
      {/* {coach?.coach?.class_type !== classes.first && ( */}
      <div className={styles.price__number}>
        {/* {coach?.coach?.bottom_price} */}
        9876
      </div>
      {/* )} */}
      {/* {coach?.coach?.class_type === classes.first && ( */}
      {/* <div className={styles.price__number}>
        4567
        {coach?.coach?.price}
      </div> */}
      {/* )} */}
      <div className={styles.currency}>
        <img src={rub} alt="иконка - руб." />
      </div>
    </div>
  );

  const sidePrice = (
    <div className={styles.price__amount}>
      <div className={styles.price__number}>
        6895
        {/* {coach?.coach?.side_price} */}
      </div>
      <span className={styles.currency}>
        <img src={rub} alt="иконка - руб." />
      </span>
    </div>
  );
  return (
    <div className={styles.wrapper}>
      {/* {(coach?.coach?.class_type === classes.second ||
        coach?.coach?.class_type === classes.third) &&
        numOfTop > 0 && */}
      {topPrice}

      {/* {numOfBottom > 0 &&  */}
      {bottomPrice}

      {/* {coach?.coach?.class_type === classes.third &&
        numOfSide > 0 && */}
      {sidePrice}
    </div>
  );
};

export default PricesBlock;