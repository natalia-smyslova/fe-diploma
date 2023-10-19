import React from 'react';
// import { HashLink } from 'react-router-hash-link';
// import { useLocation } from 'react-router-dom';

import styles from './Footer.module.scss'

import Bottom from './Bottom/Bottom';
import ContactUs from './ContactUs/ContactUs';
// import ContactItem from './ContactUs/ContactItem/ContactItem';
import Subscribtion from './Subscribtion/Subscription';


function Footer() {

  const contactUs = <ContactUs />;
  const subscribtion = <Subscribtion />;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        {contactUs}
        {subscribtion}
      </div>
      <Bottom />
    </footer>)

}

export default Footer