import React from 'react';

function ContactItem(icon, alt, children) {
  return (
    <li className='item'>
      <img className='item__icon' src={icon} alt={alt} />
      <div className='item__text'>{children}</div>
    </li>)
};
export default ContactItem;