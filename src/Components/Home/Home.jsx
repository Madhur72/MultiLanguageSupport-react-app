import React from 'react'
import { useTranslation } from 'react-i18next';
import './Home.css'

const Home = () => {
    const {t} = useTranslation()
  return (
    <div className='home-container'>
      <h1>{t('home')}</h1>
      <p>{t('homeContent')}</p>
    </div>
  )
}

export default Home
