import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './CoachTypeItem.module.scss';

import { setSelectedClasses } from '../../../../../store/slices/trainSlice'

function CoachTypeItem({ coach, direction }) {
  const dispatch = useDispatch();

  const [iconActive, setIconActive] = useState(false);

  const clickHandler = () => {
    setIconActive(!iconActive);
    dispatch(
      setSelectedClasses({ direction, name: coach.name, value: !iconActive })
    );
  };

  const icon = iconActive ? coach?.imgActive : coach?.img;

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