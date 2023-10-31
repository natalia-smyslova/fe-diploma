import React from 'react';

import ProgressBar from '../../ProgressBar/ProgressBar';
// import SidebarDetails from '../../SidebarDetails/SidebarDetails';
// import OrderConfirmation from '../../OrderConfirmation/OrderConfirmation';

import styles from './ErrorPageBody.module.scss';

function ErrorPageBody() {
  return (
    <>
      <ProgressBar step={0} />
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

export default ErrorPageBody;