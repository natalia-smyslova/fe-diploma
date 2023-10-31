import React from 'react';

import Layout from '../../components/Layout/Layout';
import SuccessfulOrderPageBody from '../../components/Bodies/SuccessfulOrderPageBody/SuccessfulOrderPageBody';

import pictures from '../../components/Layout/pictures';
// import directions from '../../utils/constants/directions';

// import styles from './PaymentPage.module.scss';


function SuccessfulOrderPage(){
  const body = <SuccessfulOrderPageBody />
  return (
    <Layout picture={pictures.successful} body={body} />
    //   {/* <MainSearchBlock width={widthOptions.wide} /> */}
    // {/* </Layout> */}
  )
};

export default SuccessfulOrderPage;