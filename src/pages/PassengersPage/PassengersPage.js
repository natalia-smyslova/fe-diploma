import React from 'react';

// import styles from './PassengersPage.module.scss';

import Layout from '../../components/Layout/Layout';
import PassengersBody from '../../components/Bodies/PassengersBody/PassengersBody';
import SearchBlockHorizontal from '../../components/SearchBlock/SearchBlockHorizontal';

import pictures from '../../components/Layout/pictures';

import styles from './PassengersPage.module.scss';

function PassengersPage() {
  const body = <PassengersBody />
  return (
    <Layout picture={pictures.selection} body={body}>
      <div className={styles.wrapper}>
        <SearchBlockHorizontal />
      </div>
    </Layout>
  )
};

export default PassengersPage;