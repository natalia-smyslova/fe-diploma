import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Slider, ConfigProvider } from 'antd';

import './PriceSlider.scss';

import { changePrice } from '../../../store/slices/priceSlice';

function PriceSlider({ onChangePrice }) {
  const dispatch = useDispatch();
  const price = useSelector(state => state.price.price);

  const min = 0;
  const max = 5000;

  const defaultValue = price.min || price.max ? [price.min, price.max] : [min, max];

  const changeHandler = value => {
    dispatch(changePrice(value));
    onChangePrice();
  }
  return (
    <div className="wrapper">
      <div className="top">
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
              }
            },
          }}
        >
          <Slider
            range
            tooltip={{
              open: true,
              placement: 'bottom',
            }}
            defaultValue={defaultValue} 
            step={5}
            min={min}
            max={max}
            onAfterChange={changeHandler}
            
            />
        </ConfigProvider>
      </div>
    </div>
  )
};


export default PriceSlider;