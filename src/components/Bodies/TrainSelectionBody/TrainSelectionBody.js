import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from '../../ProgressBar/ProgressBar';

import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';
import LastTickets from '../../LastTickets/LastTickets';
import SidebarSelection from '../../SidebarSelection/SidebarSelection';
import TrainSelection from '../../TrainSelection/TrainSelection';
// import Filters from '../../TrainSelection/Filters/Filters';

import PaginationBlock from '../../TrainSelection/PaginationBlock/PaginationBlock';

import styles from './TrainSelectionBody.module.scss';


function TrainSelectionBody() {
  const loading = useSelector(state => state.trains.loading);

  return (
    <>
      <ProgressBar step={1} /> 
      {loading && <LoadingAnimation />}
      <div className={styles.body}>    
        <div className={styles.body__left}>
          <SidebarSelection />
          <LastTickets />
        </div>
        <div>
          {/* <Filters /> */}
          <div className={styles.body__rigt}>
            <TrainSelection />
            <PaginationBlock
              current={5}
              // onChange={onChangePage}
              total={5}
              pageSize={50}
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default TrainSelectionBody;