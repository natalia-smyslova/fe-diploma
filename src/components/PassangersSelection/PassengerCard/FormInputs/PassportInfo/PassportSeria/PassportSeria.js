import React from 'react';
import { Form, InputNumber } from 'antd';

import fieldParams from '../../fieldParams';
import rules from '../../rules';

import './PassportSeria.scss';

function PassportSeria() {
  return (
    <div className='seria'>
      <Form.Item
        label={fieldParams.docSerialNumberLabel}
        name={fieldParams.docSerialNumber}
        // className={styles.documentType}
        rules={rules.docSerialNumber}
      >
        <InputNumber
          placeholder="_ _ _ _"
          // className={styles.inputFieldPassport}
          controls={false}
        />
      </Form.Item>
    </div>
  )
};

export default PassportSeria;