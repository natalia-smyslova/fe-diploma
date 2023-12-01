import React from 'react';
import { Slider, ConfigProvider } from 'antd';

import styles from './TimeSlider.module.scss';
import './TimeSlider.scss';

function TimeSlider() {


  const min = 0;
  const max = 24 * 60;

  const defaultValue = [min, max];

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
        range={{
          draggableTrack: true,
        }}
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
      </ConfigProvider>
    </div>
  );
}

export default TimeSlider;