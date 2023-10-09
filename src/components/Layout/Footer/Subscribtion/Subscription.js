import React from 'react';
import styles from './Subscription.module.scss'

import SubscribtionItems from './SubscribtionItems';

function Subscribtion() {

	return (
		<section className='subscription'>
			<div className='subsctiption__form'></div>
			<div className='subscription__subscribe'>
				<SubscribtionItems />
			</div>
		</section>
	)
}

export default Subscribtion;