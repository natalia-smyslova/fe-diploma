import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Slider } from 'antd';

// import {
//   selectTime,
//   changeTimeFields,
// } from '../../../../store/slices/sidebarSelectSlice';

// import { formatter } from '../../../../utils/timeFormatters';

// import 'antd/dist/antd.css';
// import './TimeSlider.scss';
import styles from './TimeSlider.module.scss';
import './TimeSlider.scss';

function TimeSlider() {
  // const dispatch = useDispatch();

  const min = 0;
  const max = 24 * 60;

  const defaultValue = 5;
  // const defaultValue = [time.min, time.max];

  // const onAfterChange = (value) => {
  //   dispatch(changeTimeFields({ name, direction, value }));
  //   onChangeOption();
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span>от</span>
        <span>до</span>
      </div>
      <Slider
        className="time-slider"
        range
        tooltip={{
          open: true,
          placement: 'bottom',
          // formatter,
        }}
        step={10}
        min={min}
        max={max}
        defaultValue={defaultValue}
        // onAfterChange={onAfterChange}
      />
    </div>
  );
}

export default TimeSlider;