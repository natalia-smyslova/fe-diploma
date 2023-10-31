import React from 'react';

import ProgressBar from '../../ProgressBar/ProgressBar';

// import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';
import LastTickets from '../../LastTickets/LastTickets';
// import SidebarSelection from '../../SidebarSelection/SidebarSelection';
// import TrainSelection from '../../TrainSelection/TrainSelection';

import styles from './TrainSelectionBody.module.scss';

function TrainSelectionBody() {

  return (
    <>
      <div>blablabla</div>
      <ProgressBar steps={1} />
      {/* <LoadingAnimation /> */}
      <div className={styles.body}> 
      <div>
        {/* <SidebarSelection /> */}
        <LastTickets />
      </div>
      <div>
        {/* <TrainSelection /> */}
      </div>
      </div>
    </>
  )
};

export default TrainSelectionBody;