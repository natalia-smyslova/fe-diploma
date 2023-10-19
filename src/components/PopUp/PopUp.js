import React from 'react';
import ReactDOM from 'react-dom';

import styles from './PopUp.module.scss';

import info from './img/info.svg';
import error from './img/error.svg'

function PopUp({ reason }) {
	const img = reason === 'info' ? info : error;
	return (
		<div className='wrapper'>
			<div className='popUp'>
				<div className={styles[`popUp__${reason}`]}>
					<img
						className={styles.popUp__img}
						src={img}
						alt={`${reason} icon`}
					/>
				</div>
			</div>
		</div >
	)
};
export default PopUp;