import React from 'react';

// import styles from './Layout.module.scss'

import HeaderNavigation from './Navigation/HeaderNavigation';
// import Footer from './Footer/Footer';

function Layout(){
  return (
    <div className='wrapper'>
      <header className='header'>
        <HeaderNavigation />
        {/* <main></main> */}
        {/* <Footer /> */}
      </header>
    </div>
  );
}

export default Layout;