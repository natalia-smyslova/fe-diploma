import React from 'react';
import { Form, Checkbox } from 'antd';

import fieldParams from '../fieldParams';


function SpecialNeeds() {
  return (
    <Form.Item valuePropName="checked" name={fieldParams.specialNeeds}>
      <Checkbox className="passengerCard-checkbox">
        {fieldParams.specialNeedsLabel}
      </Checkbox>
    </Form.Item>

  )
};

export default SpecialNeeds;