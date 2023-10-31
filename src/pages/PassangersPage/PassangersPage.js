import React from 'react';

// import styles from './PassangersPage.module.scss';

import Layout from '../../components/Layout/Layout';
import PassangersBody from '../../components/Bodies/PassangersBody/PassangersBody';

import pictures from '../../components/Layout/pictures';

function PassengersPage(){
  const body = <PassangersBody />
  
  return(
  <Layout picture={pictures.selection} body={body} />
  // {/* <MainSearchBlock width={widthOptions.wide} /> */}
  )
};

export default PassengersPage;