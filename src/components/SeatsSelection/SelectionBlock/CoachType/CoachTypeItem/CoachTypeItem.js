import React, { useState } from 'react';

import styles from './CoachTypeItem.module.scss';

function CoachTypeItem({ coach }) {

  const [iconActive, setIconActive] = useState(false);

  const clickHandler = () => {
    setIconActive(!iconActive);
    // dispatch(
    //   setSelectedClass({ direction, name: coach.name, value: !iconActive })
    // );
  };

  // const icon = iconActive ? coach?.imgActive : coach?.img;
  const icon = coach.img;

  return (
    <button type="button" className={styles.type} onClick={clickHandler}>
      <div className={styles.icon}>
        <img src={icon} alt="иконка" />
      </div>
      <div className={styles.name}>{coach.nameRus}</div>
    </button>
  );
};

export default CoachTypeItem;