import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../../contexts/TranslationContext';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeToggle from '../ThemeToggle';

const index = () => {
  const [active, setActive] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
        <nav className="flex flex-wrap items-center justify-between pt-6 px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="flex items-center flex-shrink-0 mr-21">
                <img src="https://cdn.getpopup.site/static/getpopup.png" onError={(e) => { (e.target as HTMLImageElement).src = '/assets/logo.png'; }} className="mr-2 h-11 sm:h-11 border border-border-light rounded-lg p-1" alt="getpopup Logo" />

                <span className="self-center text-xl font-extrabold whitespace-nowrap text-text">getpopup</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-text hover:text-white hover:border-white"
                    onClick={handleClick}
                >
                    <img src="/assets/menu.svg"/>
                </button>
            </div>
            <div className={`${
                    active ? '' : 'hidden'
                } lg:flex-grow w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center`}>
                <div className="text-sm lg:flex-grow mt-5 lg:mt-0">
                    <Link href='/'>
                        <a href="#" className="nav-link-dropdown">
                            <span>{t('header.solutions')}</span> 
                            <i className="ml-1">
                                <img src='/assets/down.svg'/>
                            </i>
                        </a>
                    </Link>

                    <Link href='/'>
                        <a href="#" className="nav-link mr-6">{t('header.productTour')}</a>
                    </Link>

                    <Link href='/'>
                        <a href="#" className="nav-link mr-6">{t('header.showcase')}</a>
                    </Link>

                    <Link href='/'>
                        <a href="#" className="nav-link">{t('header.pricing')}</a>
                    </Link>
                </div>
                <div className='mt-5 lg:mt-0 flex items-center gap-4'>
                    <ThemeToggle />
                    <LanguageSwitcher />
                    <a href="#" className="inline-block mt-4 lg:mt-0 text-text font-secondary hover:text-primary font-medium pr-8 text-base">{t('header.signIn')}</a>
                    <button type="button" className="btn text-base px-5 py-2">{t('header.tryForFree')}</button>
                </div>
            </div>
        </nav>
    </>
  );
};

export default index;
