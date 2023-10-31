import React from 'react';
import styles from './SubscribtionItems.module.scss';

import SubscribtionItem from './SubscriptionItem/SubscriptionItem';
import Youtube from '../icons/Youtube/Youtube';
import Facebook from '../icons/Facebook/Facebook';
import Google from '../icons/Google/Google';
import Linkedin from '../icons/Linkedin/Linkedin';
import Twitter from '../icons/Twitter/Twitter';

import contacts from '../../../../../utils/constants/contacts';

function SubscribtionItems() {
	const youtubeItem = <Youtube />
	const linkedinItem = <Linkedin />
	const googleItem = <Google />
	const facebookItem = <Facebook />
	const twitterItem = <Twitter />

	return (
		<ul className={styles.item}>
			<SubscribtionItem link={contacts.youtube} svgContent={youtubeItem} />
			<SubscribtionItem link={contacts.linkedin} svgContent={linkedinItem} />
			<SubscribtionItem link={contacts.google} svgContent={googleItem} />
			<SubscribtionItem link={contacts.facebook} svgContent={facebookItem} />
			<SubscribtionItem link={contacts.twitter} svgContent={twitterItem} />
		</ul>
	)
}

export default SubscribtionItems;