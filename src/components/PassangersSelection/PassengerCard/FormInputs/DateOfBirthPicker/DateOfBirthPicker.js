import React from 'react';
import { Form, ConfigProvider } from 'antd';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';

import fieldParams from '../fieldParams';
import rules from '../rules';

import './DateOfBirthPicker.scss';

dayjs.locale('ru');

function DateOfBirthPicker() {
  const DatePicker = generatePicker(dayjsGenerateConfig);
  const disabledDate = (current) => current && current > dayjs(new Date());

  return (
    <div className='birthday'>
      <ConfigProvider locale='ru'>
        <Form.Item
          label={fieldParams.dateOfBirthLabel}
          name={fieldParams.dateOfBirth}
          rules={rules.dateOfBirth}
        // value={form.dateOfBirth}
        >
          <DatePicker
            className="passengerCard-datepicker"
            popupClassName="passengerCard-datepicker"
            placeholder="дд/мм/гг"
            disabledDate={disabledDate}
            format="DD.MM.YYYY"
            allowClear
            showToday={false}
          />
        </Form.Item>
      </ConfigProvider>
    </div>
  )
};

export default DateOfBirthPicker;