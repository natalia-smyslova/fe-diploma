import React from 'react';
import { Form, InputNumber } from 'antd';

import fieldParams from '../../fieldParams';
import rules from '../../rules';


function PassportNumber() {
  return (
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

  )
};

export default PassportNumber;