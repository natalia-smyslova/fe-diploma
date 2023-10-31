import React from 'react';

import styles from './ProgressBar.module.scss';

import steps from './steps/steps';
import ProgressBarItem from './ProgressBarItem/ProgressBarItem';


function ProgressBar({ step }) {

  return (
    <div className={styles.wrapper}>
      {steps.map((item) => (
        <ProgressBarItem
          key={item.id}
          step={step}
          number={item.number}
          id={item.id}
          name={item.name}
          img={item.img}
          totalSteps={steps.length}
        />
      ))}
    </div>
  );

};
export default ProgressBar;