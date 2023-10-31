import React from 'react';

import ProgressBar from '../../ProgressBar/ProgressBar';
// import SidebarDetails from '../../SidebarDetails/SidebarDetails';
// import OrderConfirmation from '../../OrderConfirmation/OrderConfirmation';

import styles from './OrderConfirmationPageBody.module.scss';

function OrderConfirmationPageBody() {
  return (
    <>
      <ProgressBar step={4} />
      <div className={styles.body}>
        {/* <div>
          <SidebarDetails />
        </div> */}
        <div className={styles['wrapper-main']}>
          {/* <PassangersSelection /> */}
        </div>
      </div>
    </>
  )
}

export default OrderConfirmationPageBody;