import React from 'react'
import { useTranslation } from '../../../contexts/TranslationContext';

const index = () => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col w-[450px] lg:w-[600px] justify-center items-center px-16`} >
        <div className="inline-flex justify-center items-center mb-6 rounded-full">
            <img src="/assets/start_building.svg"/>
        </div>

        <h2 className={`font-secondary font-bold text-2xl lg:text-3xl mb-4`}>{t('placeholder.title')}</h2>
        <h4 className={`font-secondary font-normal text-base lg:text-xl mb-8`}>{t('placeholder.description')}</h4>
    </div>
  )
}

export default index