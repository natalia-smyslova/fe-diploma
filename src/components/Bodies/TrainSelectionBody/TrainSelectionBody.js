import React from 'react';

import ProgressBar from '../../ProgressBar/ProgressBar';

// import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';
import LastTickets from '../../LastTickets/LastTickets';
import SidebarSelection from '../../SidebarSelection/SidebarSelection';
import TrainSelection from '../../TrainSelection/TrainSelection';
// import Filters from '../../TrainSelection/Filters/Filters';

import styles from './TrainSelectionBody.module.scss';

function TrainSelectionBody() {

  return (
    <>
      <ProgressBar step={1} />
      {/* <LoadingAnimation /> */}
      <div className={styles.body}> 
      <div className={styles.body__left}>
        <SidebarSelection />
        <LastTickets />
      </div>
      <div>
        {/* <Filters /> */}
        <TrainSelection />
      </div>
      </div>
    </>
  )
};

export default TrainSelectionBody;