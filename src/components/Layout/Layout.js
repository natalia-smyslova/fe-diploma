import React from 'react';

import styles from './Layout.module.scss'

import HeaderNavigation from './Navigation/HeaderNavigation';
import Footer from './Footer/Footer';
import SearchBlock from '../SearchBlock/SearchBlock';


function Layout({ body, children, picture, }) {

  return (
    <div className="wrapper">
      <header className={styles[`header-${picture}`]}>
        <HeaderNavigation />
        <SearchBlock />
        {children}
      </header>
      {body}
      <Footer />
    </div>
  );
}


export default Layout;