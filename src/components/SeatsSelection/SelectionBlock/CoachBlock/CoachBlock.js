import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CoachInfo from './CoachInfo/CoachInfo';

import styles from './CoachBlock.module.scss';

import fetchSeats from '../../../../store/thunks/fetchSeats';

function CoachBlock({ direction }) {
  const dispatch = useDispatch();

  const activeCoaches = useSelector(state => state.train.selectedSeats)[direction];
  const train = useSelector(state => state.train.trains)[direction];

  let url = '';
  if (train._id) {
    url = `${process.env.REACT_APP_SEARCH_ROUTES}/${train._id}/seats`;
  }

  useEffect(() => {
    dispatch(fetchSeats({ url, direction }));
  }, [dispatch, url, direction]);

  const classMaker = (index) => {
    let className = '';

    switch(index) {
      case 0: 
        if (activeCoaches.length === 1) {
          className = styles.coaches;
        } else {
          className = styles['coaches-first']
        }
        break;
      case activeCoaches.length - 1:
        className = styles['coaches-last'];
        break;
      default:
        className = styles['coaches-middle'];
    }

    return className;
  }

  return (
    <div className={styles.coaches}>
      {activeCoaches.length > 0 &&
        activeCoaches.map((coach, index) => (
          <CoachInfo
            // adultSeats={adultSeats}
            // childrenSeats={childrenSeats}
            key={coach.name}
            direction={direction}
            // NumOfPplView={NumOfPplView}
            coachName={coach.name}
            className={classMaker(index)}
          />
        ))} 
      {activeCoaches.length === 0 && (
        <div className={styles.noCoach}>
          Выберите вагон для отображения схемы
        </div>
      )} 
    </div>
  );
};

export default CoachBlock;