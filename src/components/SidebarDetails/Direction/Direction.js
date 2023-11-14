import React from 'react';

import styles from './Direction.module.scss';

function Direction() {
  return (
    <div className={styles.section}>
      <div className={styles.wrapperTop}>
        <h4 className={styles.header}>
          <img alt={`стрелка направления - `} />
          <span className={styles.header__text}>Туда/Обратно</span>
        </h4>
        <div className={styles.date}> Дата
          {/* {datetimeToDate(train?.from?.datetime)} */}
        </div>
        <button
          className={styles.button}
          type="button"
          // onClick={clickHandler}
        >
          <img
            className={styles.expand}
            // src={expandIcon}
            alt="иконка управления (открыть/закрыть)"
          />
        </button>
      </div>
{/* 
      {expanded && exp} */}
    </div>
  )
};

export default Direction;