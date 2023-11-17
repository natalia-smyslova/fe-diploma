import React from 'react';
// import ReactDOM from 'react-dom';

import styles from './PopUp.module.scss';

import info from './img/info.svg';
import error from './img/error.svg'

function PopUp({ active, setActive, reason, message }) {
	const img = reason === 'info' ? info : error;

	const buttonClassNames = `button button__transparent ${styles.btn}`;
	
	return (
			<div id="popup" className={active? styles.popup__active : styles.popup}>
				<div className={styles.content}>
					<div className={styles[`header__${reason}`]}>
						<img
							className={styles.content__img}
							src={img}
							alt={`${reason} icon`}
						/>
					</div>
					<div className={styles.content__wrapper}>
						<div className={styles.content__message}>{message}</div>
					</div>
					<button
						className={buttonClassNames}
						onClick={ () => setActive(false)}
						type="button"
					>
						понятно
					</button>
				</div>
			</div>
		)

};
export default PopUp;