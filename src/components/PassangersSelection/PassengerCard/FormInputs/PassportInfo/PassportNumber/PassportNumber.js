import React from 'react';
import {  InputNumber, Form } from 'antd';

import fieldParams from '../../fieldParams';
import rules from '../../rules';

import './PassportNumber.scss';


function PassportNumber() {
  return (
    <div className='passport__number'>
    <Form.Item
      label={fieldParams.docNumberPassLabel}
      name={fieldParams.docNumberPass}
      // className={styles.documentType}
      rules={rules.docNumberPass}
    >
      <InputNumber
        placeholder="_ _ _ _ _ _"
        // className={styles.inputFieldPassport}
        controls={false}
      />
    </Form.Item>
    </div>
  )
};

export default PassportNumber;