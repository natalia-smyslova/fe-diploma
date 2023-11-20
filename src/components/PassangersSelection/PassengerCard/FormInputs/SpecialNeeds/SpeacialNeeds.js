import React from 'react';
import { Form, Checkbox } from 'antd';

import fieldParams from '../fieldParams';

import './SpecialNeeds.scss';

function SpecialNeeds() {
  return (
    <div className='special__needs'>
    <Form.Item valuePropName="checked" name={fieldParams.specialNeeds}>
      <Checkbox className="passengerCard-checkbox">
        {fieldParams.specialNeedsLabel}
      </Checkbox>
    </Form.Item>
</div>
  )
};

export default SpecialNeeds;