import React from 'react';

// import styles from './CoachItem.module.scss';

function CoachItem(
  // { name, direction, coachId }
  ) {

  // const activeCoaches = useSelector(selectSelectedCoaches)[direction];
  // const sameCoach = activeCoaches?.find((el) => el.coachId === coachId);

  // const clickHandler = () => {
  //   if (sameCoach) {
  //     dispatch(removeSelectedCoach({ direction, coachId }));
  //   } else {
  //     dispatch(setSelectedCoach({ direction, coachId, name }));
  //   }
  // };
  // const classNames = sameCoach
  //   ? `${styles.coachNames} ${styles['coachNames-active']}`
  //   : styles.coachNames;

  return (
    <button type="button" 
    // className={classNames} 
    // onClick={clickHandler}
    >
      Число
    </button>
  );
};

export default CoachItem;