import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProgressBar from '../../ProgressBar/ProgressBar';
import LastTickets from '../../LastTickets/LastTickets';
import SidebarSelection from '../../SidebarSelection/SidebarSelection';
import TrainSelection from '../../TrainSelection/TrainSelection';
import PaginationBlock from '../../TrainSelection/PaginationBlock/PaginationBlock';

import styles from './TrainSelectionBody.module.scss';

import { changeOffset, setCurrentPage } from '../../../store/slices/sortSlice';

function TrainSelectionBody() {
  const dispatch = useDispatch();
  const total = useSelector(state => state.trains.totalCount);
  const limit = useSelector(state => state.sort.limit);
  const currentPage = useSelector(state => state.sort.currentPage);

  const onChangePage = value => {
    dispatch(setCurrentPage(value));
    dispatch(changeOffset(limit * (value - 1)));
  }

  return (
    <>
      <ProgressBar step={1} /> 
      <div className={styles.body}>    
        <div className={styles.body__left}>
          <SidebarSelection />
          <LastTickets />
        </div>
        <div>
          <div className={styles.body__rigt}>
            <TrainSelection />
            <PaginationBlock
              current={currentPage}
              onChange={onChangePage}
              total={total}
              pageSize={limit}
            />
          </div>
        </div>
      </div>
    </>
  )
};

export default TrainSelectionBody;