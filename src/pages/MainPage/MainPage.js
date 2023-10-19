import React from 'react';

import Layout from '../../components/Layout/Layout';
import MainPageBody from '../../components/Bodies/MainPageBody/MainPageBody';

import pictures from '../../components/Layout/pictures';

import styles from './MainPage.module.scss';


function MainPage() {

	const body = <MainPageBody />
	return (
		<Layout body={body} picture={pictures.main}>
			 <div className={styles.wrapper}>
			<h1 className={styles.title}>
				Вся жизнь -{' '}
				<span className={styles['title-bold']}>путешествие!</span>
			</h1>
			</div>
		</Layout>
	)

};

export default MainPage;