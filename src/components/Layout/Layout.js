import React from 'react';
import PropTypes from 'prop-types'

// import styles from './Layout.module.scss'

import HeaderNavigation from './Navigation/HeaderNavigation';
import Footer from './Footer/Footer';

function Layout(props) {
  console.log(props.children);


  return (
    <div className='wrapper'>
      <header className='header'>
        <HeaderNavigation />
      </header>
      <main>
        {props.children.type}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  body: PropTypes.object
};

export default Layout;