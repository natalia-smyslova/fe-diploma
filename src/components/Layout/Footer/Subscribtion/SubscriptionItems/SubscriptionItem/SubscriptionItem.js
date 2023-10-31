import React from "react";

import styles from './SubscriptionItem.module.scss';

function SubscribtionItem({ svgContent, link }) {

  return (
    <li className={styles.item}>
      <a href={link}>
        {svgContent}
      </a>
    </li>
  )
}

export default SubscribtionItem;