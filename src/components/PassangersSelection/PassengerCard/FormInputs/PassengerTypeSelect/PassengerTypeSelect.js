import React from 'react';
import { Form, Select, } from 'antd';

import rules from '../rules'; 
import passengerTypes from '../../../../SeatsSelection/SelectionBlock/passangerTypes';

import './PassengerTypeSelect.scss';

function PassengerTypeSelect() {

  return (
    <div className='wrapper'>
      <Form.Item
        // name={fieldNames.passengerType}
        // value={form.passengerType}
        rules={rules.passengerType}
      >
        <Select
          className="passengerCard-select"
          popupClassName="passengerCard-select"
        >
          {/* {unchosenSeatsAdults && ( */}
            <Select.Option value={passengerTypes.adults}>
            {/* {pasTypesRus[passengerTypes.adults]} */}
              {passengerTypes.adults}
            </Select.Option>
          {/* )} */}
          {/* {unchosenSeatsChildren && ( */}
            <Select.Option value={passengerTypes.children}>
            {/* {pasTypesRus[passengerTypes.children]} */}
              {passengerTypes.children}
            </Select.Option>
          {/* )} */}
        </Select>
      </Form.Item>
    </div>
  )
};

export default PassengerTypeSelect;