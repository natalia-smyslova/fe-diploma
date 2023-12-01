import React from 'react';
// import { Form, Select, } from 'antd';
import { Select,  ConfigProvider } from 'antd';

// import rules from '../rules';
// import passengerTypes from '../../../../SeatsSelection/SelectionBlock/passangerTypes';

import './PassengerTypeSelect.scss';

function PassengerTypeSelect() {

  return (
    <ConfigProvider
    theme={{
      components: {
        Select: {
          colorBorder: '#928F94',
          controlOutline: 'transperant',
          controlItemBgActive: '#F7F5F9',
          colorBgElevated: '#F4F3F6',
          borderRadius: 5,
          borderRadiusLG: 5,
          borderRadiusSM: 5,
          borderRadiusXS: 5,
          fontSize: 24,
          fontSizeIcon: 10,
          fontWeightStrong: 400,
          paddingSM: 10,
          colorTextDescription: '#292929',
          colorTextDisabled: '#3E3C41',
          colorTextPlaceholder: '#3E3C41',
          colorPrimaryHover: 'transperant',
          colorPrimary: 'transperant',
          colorText: '#292929',
        },
      },
    }}
  >
      <Select
        defaultValue="Взрослый"
        style={{
          width: 280,
          height: 50,
        }}
        options={[
          {
            value: 'Взрослый',
            label: 'Взрослый',
          },
          {
            value: 'Детский',
            label: 'Детский',
          }
        ]}
      />
      </ConfigProvider>
  );

  // return (
  //   <div className='wrapper'>
  //     <Form.Item
  //       // name={fieldNames.passengerType}
  //       // value={form.passengerType}
  //       rules={rules.passengerType}
  //     >
  //       <Select
  //         className="passengerCard-select"
  //         popupClassName="passengerCard-select"
  //       >
  //         {/* {unchosenSeatsAdults && ( */}
  //           <Select.Option value={passengerTypes.adults}>
  //           {/* {pasTypesRus[passengerTypes.adults]} */}
  //             {passengerTypes.adults}
  //           </Select.Option>
  //         {/* )} */}
  //         {/* {unchosenSeatsChildren && ( */}
  //           <Select.Option value={passengerTypes.children}>
  //           {/* {pasTypesRus[passengerTypes.children]} */}
  //             {passengerTypes.children}
  //           </Select.Option>
  //         {/* )} */}
  //       </Select>
  //     </Form.Item>
  //   </div>
  // )
};

export default PassengerTypeSelect;