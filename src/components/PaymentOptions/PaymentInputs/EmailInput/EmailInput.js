import React from 'react';
import { Form, Input} from 'antd';

import fieldNames from '../../fieldNames';


import './EmailInput.scss';

function EmailInput() {
  return (
    <div className="email__input">
      <Form.Item
        className="paymentOption"
        name={fieldNames.email}
        label={fieldNames.emailLabel}
        // rules={rules.email}
        // onChange={onChangeFullName}
      >
        <Input
          placeholder="inbox@gmail.com"
          className="inputField"
        />
      </Form.Item>
    </div>
  )
};

export default EmailInput;