import React from 'react';
import styles from './Subscription.module.scss'

import SubscribtionItems from './SubscribtionItems';

function Subscribtion() {

// const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

//   const submitHandler = async (evt) => {
//     evt.preventDefault();
//     const value = e.target.value;
//     // Если некорректное значение, то всплывающее окно пользователю?
//     if (!regex.test(value)) {
//       return
//     }
//     // Иначе отправить запрос POST на сервер 
//     else {
//       try {
//         const response = await fetch(process.env.REACT_APP_SUBSCRIPTION_URL, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(emailValue),
//         });

//         // Если ответ не ок, ошибка
//         if (!response.ok) {
//           throw new Error('Что-то пошло не так. Попробуйте еще раз');
//         }
//         // Если ок, то уведомление, что все окей отправлено?
//         else {

//         }
//       }

//       // Перехватить ошибку, вывести сообщение об ошибке?
//       catch(err){}

//   }


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