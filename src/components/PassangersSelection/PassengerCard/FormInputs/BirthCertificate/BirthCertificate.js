import React from 'react';
import { Form, Input } from 'antd';

import fieldParams from '../fieldParams';
import rules from '../rules';


function BirthCertificate() {
  return (
    <Form.Item
      label={fieldParams.docNumberSertifLabel}
      name={fieldParams.docNumberSertif}
      // className={styles.documentType}
      rules={rules.docNumberSertif}
    >
      <Input
        placeholder="12 символов"
        // className={styles.inputFieldBirthSertif}
      />
    </Form.Item>

  )
};

export default BirthCertificate;