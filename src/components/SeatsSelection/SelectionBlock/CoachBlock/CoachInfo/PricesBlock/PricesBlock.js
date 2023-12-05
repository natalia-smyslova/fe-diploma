import React from 'react'

import rub from './rub.svg'

import styles from './PricesBlock.module.scss'

function PricesBlock({
  coach,
  numberOfSideSeats,
  numberOfTopSeats,
  numberOfBottomSeats,
}) {
  const topPrice = (
    <div className={styles.price__amount}>
      <div className={styles.price__number}>{coach?.coach?.top_price}</div>
      <div className={styles.currency}>
        <img src={rub} alt="иконка - руб." />
      </div>
    </div>
  )

  const bottomPrice = (
    <div className={styles.price__amount}>
      {coach?.coach?.class_type !== 'first' && (
        <div className={styles.price__number}>{coach?.coach?.bottom_price}</div>
      )}
      {coach?.coach?.class_type === 'first' && (
        <div className={styles.price__number}>{coach?.coach?.price}</div>
      )}
      <div className={styles.currency}>
        <img src={rub} alt="иконка - руб." />
      </div>
    </div>
  )

  const sidePrice = (
    <div className={styles.price__amount}>
      <div className={styles.price__number}>{coach?.coach?.side_price}</div>
      <span className={styles.currency}>
        <img src={rub} alt="иконка - руб." />
      </span>
    </div>
  )

  return (
    <div className={styles.wrapper}>
      {numberOfTopSeats > 0 &&
        (coach?.coach?.class_type === 'second' ||
          coach?.coach?.class_type === 'third') &&
        topPrice}

      {numberOfBottomSeats > 0 && bottomPrice}

      {numberOfSideSeats > 0 &&
        coach?.coach?.class_type === 'third' &&
        sidePrice}
    </div>
  )
}

export default PricesBlock
