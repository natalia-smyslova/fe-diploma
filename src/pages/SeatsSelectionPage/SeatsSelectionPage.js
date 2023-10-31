import React from 'react';

import Layout from "../../components/Layout/Layout";
import SeatsSelectionBody from '../../components/Bodies/SeatsSelectionBody/SeatsSelectionBody';

import pictures from '../../components/Layout/pictures';

// import styles from './SeatsSelectionPage.module.scss';

function SeatSelectionPage() {
  const body = <SeatsSelectionBody />
  return (
    <Layout picture={pictures.selection} body={body} />
    //   {/* <MainSearchBlock width={widthOptions.wide} /> */}
    // {/* </Layout> */}
  )
};

export default SeatSelectionPage;