import React from 'react';

import Layout from '../../components/Layout/Layout';
import PaymentPageBody from '../../components/Bodies/PaymentPageBody/PaymentPageBody';
import SearchBlockHorizontal from '../../components/SearchBlock/SearchBlockHorizontal';

import pictures from '../../components/Layout/pictures';
// import directions from '../../utils/constants/directions';

import styles from './PaymentPage.module.scss';

function PaymentPage() {
  const body = <PaymentPageBody />
  return (
    <Layout picture={pictures.selection} body={body} >
      <div className={styles.wrapper}>
        <SearchBlockHorizontal />
      </div>
    </Layout>
  )
};

export default PaymentPage;