import React from 'react';
import { Radio, ConfigProvider, Form } from 'antd';

import rules from '../rules';
import fieldParams from '../fieldParams';

import './SexRadioGroup.scss';

function SexRadioGroup() {
  // const onChange = (e) => {
  //   console.log(`checked = ${e.target.checked}`);
  // };

  return (
    <div className='wrapper'>
      <ConfigProvider
        theme={{
          components: {
            Form: {
              labelRequiredMarkColor: 'transperant',
              labelColor: '#928F94',
              labelFontSize: 16,

            },
          },
        }}
      >
        <Form.Item
          label={fieldParams.genderLabel}
          name={fieldParams.gender}
          // className={styles.genderRadioBtn}
          rules={rules.gender}
        >
          <ConfigProvider
            theme={{
              components: {
                Radio: {
                  buttonSolidCheckedActiveBg: '#FFA800',
                  buttonSolidCheckedBg: '#FFA800',
                  buttonSolidCheckedHoverBg: '#FFA800',
                  colorPrimary: '#FFA800',
                  colorPrimaryActive: 'transperant',
                  colorPrimaryBorder: 'transperant',
                  colorPrimaryHover: 'transperant',
                  borderRadius: 5,
                  colorBorder: '#928F94',
                  fontSize: 30,
                  lineHeight: 35,
                  padding: 33,
                  controlHeight: 50,
                },
              },
            }}
          >
            <Radio.Group
              optionType="button"
              buttonStyle="solid"
              className="passengerCard-radio"
              // onChange={onChange}
            >
              <Radio.Button value="true" defaultChecked>
                М
              </Radio.Button>
              <Radio.Button value="false">Ж</Radio.Button>
            </Radio.Group>
          </ConfigProvider>
        </Form.Item>
      </ConfigProvider>
    </div>
  )
};

export default SexRadioGroup;