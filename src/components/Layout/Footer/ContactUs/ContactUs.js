import React from 'react';

import email from './icons/email.svg';
import location from './icons/location.svg';
import phone from './icons/phone.svg';
import skype from './icons/skype.svg';

import contacts from '../../../../utils/constants/contacts';

import ContactItem from './ContactItem/ContactItem';

// import style from './ContactUs.module.scss'

function ContactUs() {

	return (
		<section className="contacts" id='contacts'>
			<ul className="contacts__list">
				<ContactItem icon={phone} alt="телефон">
					<a href={`tel:${contacts.phone}`}>{contacts.phoneDisplay}</a>
				</ContactItem>
				<ContactItem icon={email} alt="эл. почта">
					<a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
				</ContactItem>
				<ContactItem icon={skype} alt="скайп">
					<a href={`skype:${contacts.skype}`}>{contacts.skype}</a>
				</ContactItem>
				<ContactItem icon={location} alt="адрес">
					<div>
						{contacts.city} <br />
						{contacts.address} <br />
						{contacts.office}
					</div>
				</ContactItem>
			</ul>
		</section>
	)
};

export default ContactUs;