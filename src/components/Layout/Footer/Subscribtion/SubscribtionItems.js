import React from 'react';

import styles from './SubscribtionItems.module.scss'

//active
import facebookActive from './icons/active/facebook.svg';
import googleActive from './icons/active/facebook.svg';
import linkedinActive from './icons/active/linkedin.svg';
import twitterActive from './icons/active/twitter.svg';
import youtubeActive from './icons/active/youtube.svg';

//inactive
import facebook from './icons/inactive/facebook.svg';
import google from './icons/inactive/google.svg';
import linkedin from './icons/inactive/linkedin.svg';
import twitter from './icons/inactive/twitter.svg';
import youtube from './icons/inactive/youtube.svg';


function SubscribtionItems() {
	return (
		<ul className='subscriptions'>
			<li className='subscription__item'></li>
			<li className='subscription__item'></li>
			<li className='subscription__item'></li>
			<li className='subscription__item'></li>
			<li className='subscription__item'></li>
		</ul>
	)
}

export default SubscribtionItems;