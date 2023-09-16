import React from 'react'
import { useTranslation } from 'react-i18next';
import './About.css'

const About = () => {
    const { t } = useTranslation();
  return (
    <div className='about-container'>
      <h1>{t('about')}</h1>
      <p>{t('aboutContent')}</p>
    </div>
  )
}

export default About
