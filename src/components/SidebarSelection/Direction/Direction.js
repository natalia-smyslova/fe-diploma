import React from 'react';

// import TimeSlider from './TimeSlider/TimeSlider';

import styles from './Direction.module.scss';

function Direction() {
  const dispatch = useDispatch();

  const expandIcon = expanded ? minus : plus;

  const exp = (
    <div className={styles.expanded}>
      <h6 className={styles.expanded__header}>Время отбытия</h6>
      <TimeSlider
        name={name}
        direction="departure"
        onChangeOption={onChangeOption}
      />
      <div className={styles.expanded__ret}>
        <h6 className={styles.expanded__header}>Время прибытия</h6>
        <TimeSlider
          name={name}
          direction="arrival"
          onChangeOption={onChangeOption}
        />
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.header}>
        <h4 className={styles.header__left}>
          <img src={img} alt={`стрелка направления - ${direction}`} />
          <span className={styles.direction__text}>{direction}</span>
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
    </>
  )
};
export default Direction;