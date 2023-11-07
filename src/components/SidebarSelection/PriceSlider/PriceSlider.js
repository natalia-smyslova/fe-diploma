import React from 'react';
import { Slider, ConfigProvider } from 'antd';
// import styled from "styled-components";

import styles from './PriceSlider.module.scss';



// const SliderWrapper = styled(Slider)`
// > ant-slider >*{
//   display: flex;
//   flex-wrap: nowrap;
// }
// >.ant-slider:hover.ant-slider-track .ant-tooltip-oper{
//   background-color: #ffa800;
// }
// >.ant-slider-track{
//   background-color: #ffa800;
// }
// > .ant-slider-rail {
//   background: transparent;
//   height: 19px;
//   border-radius: 8px;
//   border: 1px solid #C4C4C4;
// }
// >.ant-slider-track-draggable{
//   background: #ffa800;
//   height: 19px;
//   border-radius: 8px;
// }

// > .ant-slider-handle {
//   background: #ffffff;
//   height: 24px;
//   width: 24px;
//   border-radius: 100%;
// }
// > .ant-slider-handle::before{
//   content: none;
// }
// > .ant-slider-handle::after{
//   content: none;
// }
// `;


function PriceSlider() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span>от</span>
        <span>до</span>
      </div>
      <div className='price-slider'>
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
                railSize: 19,
                handleSize: 19,
              },
              token: {
                colorPrimaryBorderHover:'#ffffff',
                colorPrimaryBorder:'#ffffff',
                colorPrimary:'#ffffff',
              }
            },
          }}
        >
          <Slider
            range={{
              draggableTrack: true,
            }}
            defaultValue={[20, 50]} />
        </ConfigProvider>
        {/* <SliderWrapper
          range={{
            draggableTrack: true,
          }}
          defaultValue={[20, 50]}
          min={0}
          max={10000}
        /> */}
      </div>
    </div>
  )
};


export default PriceSlider;