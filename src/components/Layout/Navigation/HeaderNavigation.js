import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Logo from '../Logo/Logo';

import styles from './HeaderNavigation.module.scss';

import links from '../../../utils/constants/links';


function HeaderNavigation() {
	return (
		<nav className={styles['header-navigation']}>
			<Logo />
			<ul className={styles['nav-bar']}>
				<li className={styles['nav-link']}>
					<HashLink smooth to={`${links.main}/#aboutUs`}>
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
						<div>Kонтакты</div>
					</HashLink>
				</li>
			</ul>
		</nav>
	)
};

export default HeaderNavigation;
