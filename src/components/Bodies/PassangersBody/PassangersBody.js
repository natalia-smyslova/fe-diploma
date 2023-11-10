import React from 'react';

import ProgressBar from '../../ProgressBar/ProgressBar';
import SidebarDetails from '../../SidebarDetails/SidebarDetails';
import PassangersSelection from '../../PassangersSelection/PassangersSelection';
// import Redirect from '../../Redirect/Redirect';

// import directions from '../../../utils/constants/directions';

import styles from './PassangersBody.module.scss';

function PassangersBody() {
  return (
    <>
      <ProgressBar step={2} />
      <div className={styles.body}>
        <div>
          <SidebarDetails />
        </div>
        <div className={styles['wrapper-main']}>
          <PassangersSelection />
        </div>
      </div>
    </>
  )
}

export default PassangersBody;