import React from 'react';

import styles from './Layout.module.scss'

import HeaderNavigation from './Navigation/HeaderNavigation';
import Footer from './Footer/Footer';


function Layout({ body, children, picture, }) {

  return (
    <div className='wrapper'>
      <header className={styles[`header-${picture}`]}>
        <HeaderNavigation />
        {children}
      </header>
      {body}

      <Footer />
    </div>
  );
}


export default Layout;