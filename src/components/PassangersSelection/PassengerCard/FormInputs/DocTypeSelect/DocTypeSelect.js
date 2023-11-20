import React from 'react';
import { Form, Select, } from 'antd';

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
      <Select
        // className={docTypeselectClasses}
        popupClassName="passengerCard-doc-select"
        showArrow
        allowClear={false}
      >
        {/* {(dayjs().diff(
          form.getFieldValue(fieldNames.dateOfBirth),
          'years'
        ) >= 14 ||
          dayjs().diff(
            form.getFieldValue(fieldNames.dateOfBirth),
            'days'
          ) <= 0) && ( */}
        <Select.Option value={docTypes.passport}>
          {docTypes.passportRus}
        </Select.Option>
        {/* )} */}
        <Select.Option value={docTypes.birthCertif}>
          {docTypes.birthCertifRus}
        </Select.Option>
      </Select>
    </Form.Item>
    </div>
  )
};

export default DocTypeSelect;