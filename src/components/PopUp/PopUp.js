import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';

import styles from './PopUp.module.scss';

import info from './img/info.svg';
import error from './img/error.svg'

function PopUp({ disabled, reason, message }) {
	const img = reason === 'info' ? info : error;

	const buttonClassNames = `button button__transparent ${styles.btn}`;
	
	let popupClassNames = (disabled === true)
		? styles.wrapper
		: styles.wrapper + styles.active;


	const closeHandler = () => {
		popupClassNames = styles.wrapper;
		console.log(styles.wrapper);
	};

	useEffect(() => {

	}, disabled, popupClassNames);

	return (
			<div id="popup" className={popupClassNames}>
				<div className={styles.popUp}>
					<div className={styles[`popUp__${reason}`]}>
						<img
							className={styles.popUp__img}
							src={img}
							alt={`${reason} icon`}
						/>
					</div>
					<div className={styles.popUp__wrapper}>
						<div className={styles.popUp__message}>{message}</div>
					</div>
					<button
						className={buttonClassNames}
						onClick={closeHandler}
						type="button"
					>
						понятно
					</button>
				</div>
			</div>
		)

};
export default PopUp;