import React from 'react';
import { Radio, Form } from 'antd';

import rules from '../rules';
import fieldParams from '../fieldParams';

import './SexRadioGroup.scss';

function SexRadioGroup() {
  return (
    <Form.Item
      label={fieldParams.genderLabel}
      name={fieldParams.gender}
      // className={styles.genderRadioBtn}
      rules={rules.gender}
    >
      <Radio.Group
        optionType="button"
        buttonStyle="solid"
        className="passengerCard-radio"
      >
        <Radio.Button value="true" defaultChecked>
          М
        </Radio.Button>
        <Radio.Button value="false">Ж</Radio.Button>
      </Radio.Group>
    </Form.Item>)
};

export default SexRadioGroup;