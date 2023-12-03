import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Slider, ConfigProvider } from 'antd';

import styles from './TimeSlider.module.scss';
import './TimeSlider.scss';

import { changeTime } from '../../../../store/slices/timeSlice';

function TimeSlider({ name, direction, onChangeTime }) {

  const dispatch = useDispatch();
  const time = useSelector(state => state.time.time);
  const timeDirection = time[name][direction];

  const min = 0;
  const max = 24;

  const defaultValue = timeDirection?.min || timeDirection?.max ? [timeDirection.min, timeDirection.max] : [min, max];

  const changeHandler = value => {
    dispatch(changeTime({ name, direction, value }));
    onChangeTime();
  }

  return (
    <div className={styles.wrapper}>
      <ConfigProvider
          theme={{
            components: {
              Slider: {
                trackHoverBg: '#ffa800',
                trackBg: '#ffa800',
                dotActiveBorderColor: '#ffffff',
                handleActiveColor: '#ffffff',
                handleColor: '#ffffff',
                dotBorderColor: '#ffffff',
                railSize: 10,
                controlSize: 10,
                handleSize: 18,
                dotSize: 18,
                borderRadiusXS: 8,
                colorPrimaryBorderHover: 'transperant',
              }
            },
          }}
        > 
      <Slider
        className="time-slider"
        range
        tooltip={{
          open: true,
          placement: 'bottom'
        }}
        step={1}
        min={min}
        max={max}
        defaultValue={defaultValue}
        onAfterChange={changeHandler}
      />
      </ConfigProvider>
    </div>
  );
}

export default TimeSlider;