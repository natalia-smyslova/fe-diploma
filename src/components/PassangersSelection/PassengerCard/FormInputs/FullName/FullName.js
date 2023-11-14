import React from 'react';
import { Form, Input } from 'antd';

import fieldParams from '../fieldParams';
import rules from '../rules';

import './FullName.scss';

function FullName() {
  // const onChangeFullName = (evt) => {
  //   form.setFieldValue(evt.target.id, evt.target.value.toLowerCase());
  // };

  return (
    <div className='fullname'>
      <Form.Item
        name={fieldParams.lastName}
        label={fieldParams.lastNameLabel}
        rules={rules.lastName}
      // onChange={onChangeFullName}
      >
        <Input
          // className={`${styles.inputField} passengerCard-input`}
          className="passengerCard-input"
          allowClear
        />
      </Form.Item>
      <Form.Item
        name={fieldParams.firstName}
        label={fieldParams.firstNameLabel}
        rules={rules.firstName}
      // onChange={onChangeFullName}
      >
        <Input
          className="passengerCard-input"
          // className={`${styles.inputField} passengerCard-input`}
          allowClear
        />
      </Form.Item>
      <Form.Item
        name={fieldParams.fathersName}
        label={fieldParams.fathersNameLabel}
        rules={rules.fathersName}
      // onChange={onChangeFullName}
      >
        <Input
          className="passengerCard-input"
          // className={`${styles.inputField} passengerCard-input`}
          allowClear
        />
      </Form.Item>
    </div>
  );
};

export default FullName;