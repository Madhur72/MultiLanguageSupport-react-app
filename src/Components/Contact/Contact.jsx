import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css'

const Contact= ()=> {
  const { t } = useTranslation();

  return (
    <div className='contact-container'>
      <h1>{t('contact')}</h1>
      <p>{t('contactMessage')}</p>
    </div>
  );
}

export default Contact;
