import React from 'react';
import {  Checkbox, ConfigProvider, Form } from 'antd';

import fieldParams from '../fieldParams';

import './SpecialNeeds.scss';

function SpecialNeeds() {
  // const onChange = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };

  return (
    <div className='special__needs'>
      <Form.Item valuePropName="checked" className='discription' name={fieldParams.specialNeeds}>
        <ConfigProvider
          theme={{
            components: {
              Checkbox: {
                colorBorder: '#928F94',
                // controlOutline: 'transperant',
                controlItemBgActive: '#FFA800',
                colorPrimaryHover: '#FFA800',
                colorPrimary: '#FFA800',
                colorPrimaryBorder: '#FFA800',
                fontSize: 18,
              },
            },
          }}>
          <Checkbox className="passengerCard-checkbox" >
            {fieldParams.specialNeedsLabel}
          </Checkbox>
        </ConfigProvider>
      </Form.Item>
    </div>
  )
};

export default SpecialNeeds;