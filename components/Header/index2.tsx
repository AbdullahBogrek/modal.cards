// import React from 'react'

// const index2 = () => {
//   return (
//     <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="container flex flex-wrap justify-between items-center mx-auto">
//         <a href="https://flowbite.com/" className="flex items-center">
//             <img src="/assets/logo.png" className="mr-[10px] h-9 sm:h-9" alt="Modal cards Logo" />
//             <span className="self-center text-base font-extrabold whitespace-nowrap">modal.cards</span>
//         </a>
//         <div className="flex md:order-2">
//             <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//             <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//                 <span className="sr-only">Open main menu</span>
//                 <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//             </button>
//         </div>
//         <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//             <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//             </li>
//             <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//             </li>
//             <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//             </li>
//             <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//             </li>
//             </ul>
//         </div>
//         </div>
//     </nav>
//   )
// }

// export default index2

const index = () => {
    return (
      <header>
          <nav className="bg-white pt-6 lg:px-6">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1194px]">
                  <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                      <a href="/" className="flex items-center" aria-label='logo' title='logo'>
                          <img src="/assets/logo.png" className="mr-[10px] h-9 sm:h-9" alt="Modal cards Logo" />
                          <span className="self-center text-base font-extrabold whitespace-nowrap">modal.cards</span>
                      </a>
                      <ul className="flex flex-col mt-4 ml-21 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <a href="#" className="inline-flex items-center nav-link">
                                  <span>Solutions</span> 
                                  <i className="ml-1">
                                      <img src='/assets/down.svg'/>
                                  </i>
                              </a>
                          </li>
                          <li>
                              <a href="#" className="block nav-link">Product Tour</a>
                          </li>
                          <li>
                              <a href="#" className="block nav-link">Showcase</a>
                          </li>
                          <li>
                              <a href="#" className="block nav-link">Pricing</a>
                          </li>
                      </ul>
                  </div>
                  <div className="flex items-center lg:order-2">
                      <a href="#" className="text-black font-secondary hover:text-primary font-medium pr-8 text-base">Sign in</a>
                      <button type="button" className="btn text-base px-5 py-2">Try for free</button>
                      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                          <span className="sr-only">Open main menu</span>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                  </div>
              </div>
          </nav>
      </header>
    )
  }
  
  export default index