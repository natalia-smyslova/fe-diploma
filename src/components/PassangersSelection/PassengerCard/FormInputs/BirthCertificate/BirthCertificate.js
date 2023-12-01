import React from 'react';
import { Form, Input, ConfigProvider } from 'antd';

import fieldParams from '../fieldParams';
import rules from '../rules';

import './BirthCertificate.scss';

function BirthCertificate() {
  return (
    <div className='birth__wrapper'>
      <Form.Item
        label={fieldParams.docNumberSertifLabel}
        name={fieldParams.docNumberSertif}
        // className={styles.documentType}
        rules={rules.docNumberSertif}
      >
        <ConfigProvider
          theme={{
            components: {
              Input: {
                activeBorderColor: '#928F94',
                colorBorder: '#928F94',
                hoverBorderColor: '#928F94',
                controlOutline: 'transperant',
                fontSize: 24,
                fontWeightStrong: 400,
                colorText: '#292929',
              },
            },
          }}>

          <Input
            placeholder="12 символов"
            style={{
              width: 207,
              height: 50,
            }}
          // className={styles.inputFieldBirthSertif}
          />
        </ConfigProvider>
      </Form.Item>
    </div>

  )
};

export default BirthCertificate;