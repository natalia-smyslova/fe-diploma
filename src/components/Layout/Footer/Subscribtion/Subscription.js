import React from 'react';
import styles from './Subscription.module.scss'

import SubscribtionItems from './SubscribtionItems';

function Subscribtion() {

	const buttonClassNames = `button button__transparent ${styles.formBlock__btn}`;

	return (
		<section className={styles.subscription}>
			<h3 className={styles.subscription__title}>Подписка</h3>
			<div className={styles.subsctiption__form}>
				<h4 className={styles.formBlock__title}>Будьте в курсе событий</h4>
				<input className={styles.formBlock__input} type="email" id="mail" placeholder="e-mail" />
				{/* <label htmlFor="mail">Ввод почты</label> */}
				<button className={buttonClassNames} type="submit">отправить</button>
			</div>
			<div className={styles.subscription__subscribe}>
				<h3 className={styles.subscription__title}>Подписывайтесь на нас</h3>
				<SubscribtionItems />
			</div>
		</section>
	)
}

export default Subscribtion;