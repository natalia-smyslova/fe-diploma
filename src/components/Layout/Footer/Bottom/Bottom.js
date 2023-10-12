import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import Logo from '../../Logo/Logo';
import arrow from '../ContactUs/icons/arrow.svg';

import styles from './Bottom.module.scss'

function Bottom() {

  const { pathname } = useLocation();

  return (
    <div className={styles['bottom-nav']}>
      <Logo />
      <div className='bottom__link'>
        <HashLink smooth to={`${pathname}#header-navigation`}>
          <img className='bottom__arrow' src={arrow} alt='наверх' />
        </HashLink>
      </div>
      <div className='bottom__year'>2023 WEB</div>
    </div>
  )
};

export default Bottom;