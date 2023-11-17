import React from 'react';

import Layout from '../../components/Layout/Layout';
import OrderConfirmationPageBody from '../../components/Bodies/OrderConfirmationPageBody/OrderConfirmationPageBody';
import SearchBlockHorizontal from '../../components/SearchBlock/SearchBlockHorizontal';

import pictures from '../../components/Layout/pictures';


import styles from './OrderConfirmationPage.module.scss';


function OrderConfirmationPage() {
  const body = <OrderConfirmationPageBody />
  return (
    <Layout picture={pictures.selection} body={body} >
      <div className={styles.wrapper}>
        <SearchBlockHorizontal />
      </div>
    </Layout>
  )
};
export default OrderConfirmationPage