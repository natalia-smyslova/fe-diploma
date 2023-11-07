import React, { useEffect, useState } from 'react';
import styles from './Subscription.module.scss';
import SubscribtionItems from './SubscriptionItems/SubscribtionItems';
import PopUp from '../../../PopUp/PopUp';
import messages from './messages';

function Subscribtion() {

	const [inputValue, setInputValue] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [loading, setLoading] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [error, setError] = useState(null);
	const [isDisabled, setDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const [reason, setReason] = useState('');

	useEffect(() => {
		// console.log(isDisabled);
		// setDisabled(!isDisabled);
		// console.log(isDisabled);
	}, [setDisabled]);


	const changeHandler = e => {
		setInputValue(e.target.value);
	};
	const submitHandler = async (e) => {
		e.preventDefault();


		try {
			setError(null);
			setLoading(true);

			const email = `${process.env.REACT_APP_SUBSCRIPTION_URL}${inputValue}`;
			const response = await fetch(email, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(inputValue),
			});

			if (!response.ok) {
				setDisabled(false);
				setReason('error');
				setMessage(messages.error);
				throw new Error('Response Error');
			}
			else {
				setDisabled(false);
				setReason('info');
				setMessage(messages.info);
				const input = document.querySelector('input');
				input.value = '';
			}
		}

		catch (err) {
			setError(err.message);
		}
		finally {
			setLoading(false);
		}
	};

	const buttonClassNames = `button button__transparent ${styles.formBlock__btn}`;

	return (
		<section className={styles.subscription}>
			<h3 className={styles.subscription__title}>Подписка</h3>
			<div className={styles.subsctiption__form}>
				<h4 className={styles.formBlock__title}>Будьте в курсе событий</h4>
				<input className={styles.formBlock__input} type="email" id="mail" placeholder="e-mail" onChange={changeHandler} required />
				{/* <label htmlFor="mail">Ввод почты</label> */}
				<button className={buttonClassNames} type="submit" onClick={submitHandler}>отправить</button>
			</div>
			<div className={styles.subscription__subscribe}>
				<h3 className={styles.subscription__title}>Подписывайтесь на нас</h3>
				<SubscribtionItems />
				<PopUp disabled={isDisabled} reason={reason} message={message}/>
			</div>
		</section>
	)
}

export default Subscribtion;