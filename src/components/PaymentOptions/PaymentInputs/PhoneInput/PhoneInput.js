import React from 'react';
import { Form, InputNumber} from 'antd';

import fieldNames from '../../fieldNames';

import './PhoneInput.scss';


function PhoneInput() {

  return (
    <div className="phone__input">
      <Form.Item
        className="paymentOption"
        name={fieldNames.phone}
        label={fieldNames.phoneLabel}
        // rules={rules.phone}
      >
        <InputNumber
          className="inputField"
          prefix="+7"
          placeholder="_ _ _  _ _ _  _ _  _ _"
          controls={false}
        />
      </Form.Item>
    </div>
  )
};

export default PhoneInput;

