import React from 'react';

import ProgressBar from "../../ProgressBar/ProgressBar";
import LastTickets from "../../LastTickets/LastTickets";
// import SidebarSelection from "../../SidebarSelection/SidebarSelection";
// import SeatsSelection from "../../SeatsSelection/SeatsSelection";

import styles from './SeatsSelectionBody.module.scss';

function SeatsSelectionBody() {
  return (
    <>
      <ProgressBar step={1} />
      <div className={styles.body}>
        {/* <SidebarSelection /> */}
        <LastTickets />
      </div>
      {/* <div className={styles.body__main}>
        <SeatsSelection />
      </div> */}
    </>
  )

};
export default SeatsSelectionBody;