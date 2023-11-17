import React from 'react';

// import styles from './PassangersPage.module.scss';

import Layout from '../../components/Layout/Layout';
import PassangersBody from '../../components/Bodies/PassangersBody/PassangersBody';
import SearchBlockHorizontal from '../../components/SearchBlock/SearchBlockHorizontal';

import pictures from '../../components/Layout/pictures';

import styles from './PassangersPage.module.scss';

function PassengersPage() {
  const body = <PassangersBody />

  return (
    <Layout picture={pictures.selection} body={body}>
      <div className={styles.wrapper}>
        <SearchBlockHorizontal />
      </div>
    </Layout>
    // {/* <MainSearchBlock width={widthOptions.wide} /> */}
  )
};

export default PassengersPage;