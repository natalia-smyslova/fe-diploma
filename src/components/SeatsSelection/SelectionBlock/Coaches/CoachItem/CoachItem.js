import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CoachItem.module.scss';

import { removeSelectedSeats, setSelectedSeats } from '../../../../../store/slices/trainSlice';

function CoachItem({ direction, name, coachId }) {
  
  const dispatch = useDispatch();
  const activeCoaches = useSelector(state => state.train.selectedSeats)[direction];
  const sameCoach = activeCoaches?.find(item => item?.name === name);

  const clickHandler = () => {
    if (sameCoach) {
      dispatch(removeSelectedSeats({ direction, coachId }));
    } else {
      dispatch(setSelectedSeats({ direction, coachId, name }));
    }
  }

  const classNames = sameCoach ? `${styles['coach-name']} ${styles.active}` : `${styles['coach-name']}`;

  return (
    <button type="button" className={classNames} onClick={clickHandler}>{name}</button>
  );
};

export default CoachItem;