import React from 'react';

import ProgressBar from "../../ProgressBar/ProgressBar";
// import SeatsSelection from "../../SeatsSelection/SeatsSelection";
// import SidebarDetails from '../../SidebarDetails/SidebarDetails';
// import PaymentOptions from '../../PaymentOptions/PaymentOptions';


import styles from './PaymentPageBody.module.scss';

function PaymentPageBody() {
  return (
    <>
      <ProgressBar step={3} />
      <div className={styles.body}>
        {/* <SidebarSelection /> */}
        {/* <SidebarDetails /> */}
      </div>
      {/* <div className={styles.body__main}>
        <PaymentOptions />
      </div> */}
    </>
  )

};
export default PaymentPageBody;