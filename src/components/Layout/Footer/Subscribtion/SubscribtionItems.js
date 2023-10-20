import React from 'react';

import styles from './SubscribtionItems.module.scss'

// active
// import facebookActive from './icons/active/facebook.svg';
// import googleActive from './icons/active/facebook.svg';
// import linkedinActive from './icons/active/linkedin.svg';
// import twitterActive from './icons/active/twitter.svg';
// import youtubeActive from './icons/active/youtube.svg';

// inactive
import facebook from './icons/inactive/facebook.svg';
import google from './icons/inactive/google.svg';
import linkedin from './icons/inactive/linkedin.svg';
import twitter from './icons/inactive/twitter.svg';
import youtube from './icons/inactive/youtube.svg';

import contacts from '../../../../utils/constants/contacts';

function SubscribtionItems() {

	return (
		<ul className={styles.subscriptions}>
			<li className={styles.subscription}>
				<a href={contacts.youtube} className={styles.subscription__href}>
					<img className={styles.subscription__icon} src={youtube} alt="youtube" />
				</a>
			</li>
			<li className={styles.subscription}>
				<a href={contacts.linkedin}>
					<img className={styles.subscription__icon} src={linkedin} alt="linkedin" />
				</a>
			</li>
			<li className={styles.subscription}>
				<a href={contacts.google}>
					<img className={styles.subscription__icon} src={google} alt="google" />
				</a>
			</li>
			<li className={styles.subscription}>
				<a href={contacts.facebook}>
					<img className={styles.subscription__icon} src={facebook} alt="facebook" />
				</a>
			</li>
			<li className={styles.subscription}>
				<a href={contacts.twitter}>
					<img className={styles.subscription__icon} src={twitter} alt="twitter" />
				</a>
			</li>
		</ul>
	)
}

export default SubscribtionItems;