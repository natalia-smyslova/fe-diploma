import React from 'react';

import styles from './ContactItem.module.scss';

function ContactItem({icon, alt, children}) {

  return (
    <li className={styles.item}>
      <img className={styles.item__icon} src={icon} alt={alt} />
      <div className={styles.item__text}>{children}</div>
    </li>)
};
export default ContactItem;