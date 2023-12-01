import React from 'react';

import { Radio, Form } from 'antd';

import paymentTypes from './paymentTypes';
import fieldNames from '../fieldNames';
import rules from '../rules';

import './PaymentRadio.scss';
import styles from './PaymentRadio.module.scss';

function PaymentRadio() {
  return (
    <div className='radio__wrapper'>
      <Form.Item
        name={fieldNames.paymentMethod}
        rules={rules.paymentMethod}
      >
        <Radio.Group className={styles.radioGroup}>
          <div className={styles.section}>

            <Radio
              className='online__checkbox'
              value={paymentTypes.onlineEng}
            >
              <div className='payment__online'> {paymentTypes.online}
              </div>
              {/* {paymentTypes.online} */}
              <div className={styles.onlinePayments}>
                <div className={styles.paymentMethod}>
                  {paymentTypes.card}
                </div>
                <div className={styles.paymentMethod}>
                  {paymentTypes.payPal}
                </div>
                <div className={styles.paymentMethod}>
                  {paymentTypes.visa}
                </div>
              </div>
            </Radio>
          </div>
          <div className={styles.section}>
            <Radio
              value={paymentTypes.cashEng}        
              className='cash__checkbox'
            // className={` ${styles.radioRow} radioRow`}
            >
              <div className='payment__cash'>
                {paymentTypes.cash}
              </div>
            </Radio>
          </div>
        </Radio.Group>
      </Form.Item>
    </div>
  )
}

export default PaymentRadio;