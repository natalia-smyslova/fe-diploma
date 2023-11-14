import React from 'react';

import styles from './PaymentCard.module.scss';

function PaymentCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>Способ оплаты</div>
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.payment}>
            sggsggr
            {/* {paymentOption === paymentTypes.cashEng
              ? paymentTypes.cash
              : paymentTypes.online} */}
          </div>
        </div>
        <div className={styles.right}>
          aegaeg
          {/* {editBtnMaker(links.paymentOptions)} */}
        </div>
      </div>
    </div>
  )
};

export default PaymentCard;

