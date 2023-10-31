import React from 'react';

import Layout from '../../components/Layout/Layout';
import OrderConfirmationPageBody from '../../components/Bodies/OrderConfirmationPageBody/OrderConfirmationPageBody';
import pictures from '../../components/Layout/pictures';

// import styles from './OrderConfirmationPage.module.scss';


function OrderConfirmationPage(){
  const body = <OrderConfirmationPageBody />
  return (
    <Layout picture={pictures.selection} body={body} />
    //   {/* <MainSearchBlock width={widthOptions.wide} /> */}
    // {/* </Layout> */}
  )
};
export default OrderConfirmationPage