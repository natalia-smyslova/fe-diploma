import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from 'antd';

import FullName from '../PassangersSelection/PassengerCard/FormInputs/FullName/FullName';
import PhoneInput from './PaymentInputs/PhoneInput/PhoneInput';
import EmailInput from './PaymentInputs/EmailInput/EmailInput';
import PaymentRadio from './PaymentRadio/PaymentRadio';

import links from '../../utils/constants/links';
import styles from './PaymentOptions.module.scss';

function PaymentOptions() {
  const navigate = useNavigate();

  const clickHandler = () => {
    // form.validateFields().then((values) => {
    //   dispatch(addPersonalData(values));
    navigate(links.orderConfirmation);
    // });
    // .catch((errorInfo) => {
    //    console.log(errorInfo);
    // });
  };
  const [form] = Form.useForm();
  const buttonClassNames = `button button-colored ${styles.btn}`;

  return (

    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Form
          form={form}
          layout="vertical"
          scrollToFirstError
        // initialValues={initialValues}
        >
          <div className={styles.header}>
            <span className={styles.text}>Персональные данные</span>
          </div>
          <div className={styles.section__first}>
            <div className={styles.name}>
              <FullName />
            </div>
            <PhoneInput />
            <EmailInput />
          </div>
          <div className={styles.header}>
            <span className={styles.text}>Способ оплаты</span>
          </div>
          <div className={styles.section__second}>
            <PaymentRadio />
          </div>
        </Form>
      </div>
      <div className={buttonClassNames}>
        <button onClick={clickHandler} type="submit">
          купить билеты
        </button>
      </div>
    </div>

  )
};

export default PaymentOptions;