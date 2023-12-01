import React from 'react';
import { Select, ConfigProvider, Form } from 'antd';

import fieldParams from '../fieldParams';
import rules from '../rules';
import docTypes from '../docTypes';

import './DocTypeSelect.scss';

function DocTypeSelect() {
  return (
    <div className='doc__wrapper'>
      <Form.Item
      label={fieldParams.docTypeLabel}
      name={fieldParams.docType}
      // className={styles.documentType}
      rules={rules.docType}
    >
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
          // className={docTypeselectClasses}
          popupClassName="passengerCard-doc-select"
          showArrow
          allowClear={false}
          defaultValue={docTypes.passport}
          style={{
            width: 205,
            height: 50,
          }}
        >
          {/* {(dayjs().diff(
          form.getFieldValue(fieldNames.dateOfBirth),
          'years'
        ) >= 14 ||
          dayjs().diff(
            form.getFieldValue(fieldNames.dateOfBirth),
            'days'
          ) <= 0) && ( */}
          <Select.Option value={docTypes.passport}
            style={{
              width: 205,
              height: 50,
            }}>
            {docTypes.passportRus}
          </Select.Option>
          {/* )} */}
          <Select.Option value={docTypes.birthCertif}
            style={{
              width: 444,
              height: 50,
            }}>
            {docTypes.birthCertifRus}
          </Select.Option>
        </Select>
      </ConfigProvider>
      </Form.Item>
    </div>
  )
};

export default DocTypeSelect;