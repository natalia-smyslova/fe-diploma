import React, { useState } from 'react';

import TimeSlider from './TimeSlider/TimeSlider';

import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
// import arrowBack from '../img/back.svg';
import arrowTo from '../img/to.svg';

import styles from './Direction.module.scss';

function Direction() {
  // const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(true);
  const expandIcon = expanded ? minus : plus;

  const clickHandler = () => {
    setExpanded(!expanded);
  };


  const exp = (
    <div className={styles.expanded}>
      <h6 className={styles.title__left}>Время отбытия</h6>
      <TimeSlider
        // name={name}
        direction="departure"
        // onChangeOption={onChangeOption}
      />
      <div className={styles.expanded__ret}>
        <h6 className={styles.title__right}>Время прибытия</h6>
        <TimeSlider
          // name={name}
          direction="arrival"
          // onChangeOption={onChangeOption}
        />
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h4 className={styles.header__left}>
          <img src={arrowTo} alt="стрелка направления" />
          <div className={styles.direction__text}>Туда</div>
        </h4>
        <button
          className={styles.header__button}
          type="button"
          onClick={clickHandler}
        >
          <img
            className={styles.header__expand}
            src={expandIcon}
            alt="иконка управления (открыть/закрыть)"
          />
        </button>
      </div>

      {expanded && exp}
    </div>
  )
};
export default Direction;