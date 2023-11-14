import React from 'react';

import passenger from './img/passenger.svg';

import styles from './Passengers.module.scss';

function Passengers() {
  return (
    <div className={styles.section}>
      <div className={styles.wrapperTop}>
        <h4 className={styles.header}>
          <img src={passenger} alt="иконка - пассажир" />
          <span className={styles.header__text}>Пассажиры</span>
        </h4>

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

      {/* {expanded && exp} */}
    </div>
  )
};

export default Passengers;