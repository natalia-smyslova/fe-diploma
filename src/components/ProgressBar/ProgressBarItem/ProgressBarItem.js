import React from 'react';

import styles from './ProgressBarItem.module.scss';

import vector from '../img/vector.svg';

function ProgressBarItem({ step, number, id, name, totalSteps, img }) {
  const imgClasses = `${styles.breaker} ${id <= step ? `${styles['breaker-done']}` : ''
    } ${id === step ? `${styles['breaker-cut']}` : ''}`;

  return (
    <>
      <div
        className={`${styles.step} ${styles[`step-${number}`]} ${styles[`${id <= step ? 'step-done' : ''}`]
          } `}
      >
        <img
          className={styles.step__icon}
          src={img}
          alt={`icon -${number}`}
        />
        <div className={styles.step__name}>{name}</div>
      </div>
      {id < totalSteps && (
        <div>
          <img className={imgClasses} src={vector} alt="vector" />
        </div>
      )}
    </>
  );
};
export default ProgressBarItem;