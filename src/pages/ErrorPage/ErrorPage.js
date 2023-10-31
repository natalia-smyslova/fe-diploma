import React from 'react';

import Layout from '../../components/Layout/Layout';
import ErrorPageBody from '../../components/Bodies/ErrorPageBody/ErrorPageBody';
import pictures from '../../components/Layout/pictures';
// import directions from '../../utils/constants/directions';

// import styles from './PaymentPage.module.scss';


function ErrorPage(){
  const body = <ErrorPageBody />
  return (
    <Layout picture={pictures.selection} body={body} />
    //   {/* <MainSearchBlock width={widthOptions.wide} /> */}
    // {/* </Layout> */}
  )
};

export default ErrorPage;