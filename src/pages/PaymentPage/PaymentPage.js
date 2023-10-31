import React from 'react';

import Layout from '../../components/Layout/Layout';
import PaymentPageBody from '../../components/Bodies/PaymentPageBody/PaymentPageBody';

import pictures from '../../components/Layout/pictures';
// import directions from '../../utils/constants/directions';

// import styles from './PaymentPage.module.scss';

function PaymentPage(){
  const body = <PaymentPageBody />
  return (
    <Layout picture={pictures.selection} body={body} />
    //   {/* <MainSearchBlock width={widthOptions.wide} /> */}
    // {/* </Layout> */}
  )
};

export default PaymentPage;