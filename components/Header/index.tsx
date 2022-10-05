import Link from 'next/link';
import { useState } from 'react';

const index = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
        <nav className="flex flex-wrap items-center justify-between mx-auto max-w-[1194px] pt-6 px-6 lg:px-0">
            <div className="flex items-center flex-shrink-0 mr-21">
                <img src="/assets/logo.png" className="mr-2 h-9 sm:h-9" alt="Modal cards Logo" />

                <span className="self-center text-base font-extrabold whitespace-nowrap">modal.cards</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-black hover:text-white hover:border-white"
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
                            <span>Solutions</span> 
                            <i className="ml-1">
                                <img src='/assets/down.svg'/>
                            </i>
                        </a>
                    </Link>

                    <Link href='/'>
                        <a href="#" className="nav-link mr-6">Product Tour</a>
                    </Link>

                    <Link href='/'>
                        <a href="#" className="nav-link mr-6">Showcase</a>
                    </Link>

                    <Link href='/'>
                        <a href="#" className="nav-link">Pricing</a>
                    </Link>
                </div>
                <div className='mt-5 lg:mt-0'>
                    <a href="#" className="inline-block mt-4 lg:mt-0 text-black font-secondary hover:text-[#7D4AEA] font-medium pr-8 text-base">Sign in</a>
                    <button type="button" className="btn text-base px-5 py-2">Try for free</button>
                </div>
            </div>
        </nav>
    </>
  );
};

export default index;