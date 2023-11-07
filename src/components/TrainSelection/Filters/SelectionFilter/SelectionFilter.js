import React from 'react';
import { Select, ConfigProvider } from 'antd';

// import styled from "styled-components";

// const SelectWrapper = styled(Select)`
//   .ant-select>* {
//     border: 0;
//   }
// .ant-select {
//     border: 0;
//   }
// `;

// {/* <ConfigProvider
//   theme={{
//     token: {
//       /* here is your global tokens */
//     },
//   }}
// >
//   ...
// </ConfigProvider> */}


function SelectionFilter() {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBorder: 'transperant',
            controlOutline: 'transperant',
            controlItemBgActive: '#F7F5F9',
            colorBgElevated: '#F7F5F9',
            borderRadius: 0,
            borderRadiusLG: 0,
            borderRadiusSM: 0,
            borderRadiusXS: 0,
            fontSize: 18,
            fontSizeIcon: 0,
            fontWeightStrong: 400,
            paddingSM: 10,
            colorTextDescription: '#3E3C41',
            colorTextDisabled: '#3E3C41',
            colorTextPlaceholder: '#3E3C41',
            colorText: '#3E3C41',
          },
        },
      }}
    >
      <Select
        defaultValue="времени"
        style={{
          width: 139,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'времени',
            label: 'времени',
          },
          {
            value: 'стоимости',
            label: 'стоимости',
          },
          {
            value: 'длительности',
            label: 'длительности',
          },
        ]}
      />
    </ConfigProvider>
  )
};


export default SelectionFilter;