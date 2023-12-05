import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CoachItem from './CoachItem/CoachItem';

import styles from './Coaches.module.scss';

import { removeAllSelectedSeats, setSelectedSeats } from '../../../../store/slices/trainSlice';

function Coaches({ direction }) {
  const dispatch = useDispatch();
  const coaches = useSelector(state => state.seats.seatsOptions)[direction];
  const selectedClass = useSelector(state => state.train.selectedClasses)[direction];
  const activeCoaches = useSelector(state => state.train.selectedSeats)[direction];
  // console.log(activeCoaches)
  let displayCoaches = [];

  const filter = Object.entries(selectedClass)?.map(item => item[1] ? item[0] : null)?.filter(item => item !== null);


  if (filter.length > 0) {
    displayCoaches = coaches.filter(item => 
      item?.coach?.class_type.includes(filter[0]) ||
      item?.coach?.class_type.includes(filter[1]) ||
      item?.coach?.class_type.includes(filter[2]) ||
      item?.coach?.class_type.includes(filter[3])
    )
  } else {
    displayCoaches = coaches;
  }

  useEffect(() => {
    const name = displayCoaches[0]?.coach.name;
    const coachId = displayCoaches[0]?.coach._id;
    const sameCoach = activeCoaches?.find(item => item?.coachId === coachId);

    if (name && (!sameCoach || activeCoaches?.length > displayCoaches?.length)) {
      dispatch(removeAllSelectedSeats(direction));
      dispatch(setSelectedSeats({ name, direction, coachId }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={styles.coaches}>
      <div className={styles.available}>
        <div className={styles['coaches__amount']}>Вагоны</div>
        {displayCoaches?.map(item => 
          <CoachItem key={item?.coach?._id} direction={direction} name={item?.coach?.name} coachId={item?.coach?._id} />  
        )}
      </div>
      <span className={styles.text}>
        Нумерация вагонов начинается с головы поезда
      </span>
    </div>
  );

};
export default Coaches;