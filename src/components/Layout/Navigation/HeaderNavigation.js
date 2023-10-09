import React from 'react';
import { HashLink } from 'react-router-hash-link';
// import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';

import styles from './HeaderNavigation.module.scss';

import links from '../../../utils/constants/links';


function HeaderNavigation() {
	return (
		<nav className='header-navigation'>
			<Logo />
			<ul className={styles['nav-bar']}>
				<li className={styles['nav-link']}>
					<HashLink smooth to={`${links.main}/#aboutUsS`}>
						<div>О нас</div>
					</HashLink>
				</li>
				<li className={styles['nav-link']}>
					<HashLink smooth to={`${links.main}/#how-it-works`}>
						<div>Как это работает</div>
					</HashLink>
				</li>
				<li className={styles['nav-link']}>
					<HashLink smooth to={`${links.main}/#reviews`}>
						<div>Отзывы</div>
					</HashLink>
				</li>
				<li className={styles['nav-link']}>
					<HashLink smooth to={`${links.main}/#contacts`}>
						<div>онтакты</div>
					</HashLink>
				</li>
			</ul>
		</nav>
	)
};

export default HeaderNavigation;
