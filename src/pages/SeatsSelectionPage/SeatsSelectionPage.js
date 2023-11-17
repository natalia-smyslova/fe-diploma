import React from 'react';

import Layout from "../../components/Layout/Layout";
import SeatsSelectionBody from '../../components/Bodies/SeatsSelectionBody/SeatsSelectionBody';
import SearchBlockHorizontal from '../../components/SearchBlock/SearchBlockHorizontal';

import pictures from '../../components/Layout/pictures';

import styles from './SeatsSelectionPage.module.scss';

function SeatSelectionPage() {
  const body = <SeatsSelectionBody />
  return (
    <Layout picture={pictures.selection} body={body} >
      <div className={styles.wrapper}>
        <SearchBlockHorizontal />
      </div>
    </Layout>
  )
};

export default SeatSelectionPage;