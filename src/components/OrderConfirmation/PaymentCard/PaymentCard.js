import React from 'react';

import styles from './PaymentCard.module.scss';

function PaymentCard() {
  const buttonClassNames = `button button__transperant-light ${styles.btn}`;

  return (
    <div className={styles.card}>
      <div className={styles.header}>Способ оплаты</div>
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.payment}>
            Наличными
            {/* {paymentOption === paymentTypes.cashEng
              ? paymentTypes.cash
              : paymentTypes.online} */}
          </div>
        </div>
        <div className={styles.right}>
          <button type='button' className={buttonClassNames}>Изменить</button>
          {/* {editBtnMaker(links.paymentOptions)} */}
        </div>
      </div>
    </div>
  )
};

export default PaymentCard;

