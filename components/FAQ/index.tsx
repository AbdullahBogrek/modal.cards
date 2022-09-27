import React from 'react'

const index = () => {
  return (
    <section className='bg-white'>
      <div className="flex flex-wrap max-w-[1194px] mx-auto pt-24 text-center">
        <div className="section-title mb-10">Frequently Asked Questions</div>
        
        <div id="accordion-open" data-accordion="open" className='w-full'>
          <h2 id="accordion-collapse-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span className='font-primary font-semibold text-lg text-accordion-gray leading-6'>How do I pay for the essentials or premium plan?</span>
              <i>
                <img src="/assets/add_circle_outline.svg" className='w-6 h-6'/>
              </i>
            </button>
          </h2>
        </div>
        
        <div id="accordion-open" data-accordion="open" className='w-full'>
          <h2 id="accordion-collapse-heading-2">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span className='font-primary font-semibold text-lg text-black leading-6'>Can I cancel my essentials or premium plan subscription at my time?</span>
              <i>
                <img src="/assets/remove_circle_outline.svg" className='w-6 h-6'/>
              </i>
            </button>
          </h2>
          <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.</p>
            </div>
          </div>
        </div>
        
        <div id="accordion-open" data-accordion="open" className='w-full'>
          <h2 id="accordion-collapse-heading-3">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span className='font-primary font-semibold text-lg text-accordion-gray leading-6'>How do I pay for the essentials or premium plan?</span>
              <i>
                <img src="/assets/add_circle_outline.svg" className='w-6 h-6'/>
              </i>
            </button>
          </h2>
        </div>
        
        <div id="accordion-open" data-accordion="open" className='w-full'>
          <h2 id="accordion-collapse-heading-4">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span className='font-primary font-semibold text-lg text-accordion-gray leading-6'>We need to add new users to our team, how will that be billed?</span>
              <i>
                <img src="/assets/add_circle_outline.svg" className='w-6 h-6'/>
              </i>
            </button>
          </h2>
        </div>

        <div id="accordion-open" data-accordion="open" className='w-full'>
          <h2 id="accordion-collapse-heading-5">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span className='font-primary font-semibold text-lg text-accordion-gray leading-6'>How do I pay for the essentials or premium plan?</span>
              <i>
                <img src="/assets/add_circle_outline.svg" className='w-6 h-6'/>
              </i>
            </button>
          </h2>
        </div>

        <div id="accordion-open" data-accordion="open" className='w-full'>
          <h2 id="accordion-collapse-heading-6">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span className='font-primary font-semibold text-lg text-accordion-gray leading-6'>Can I cancel my essentials or premium plan subscription at my time?</span>
              <i>
                <img src="/assets/add_circle_outline.svg" className='w-6 h-6'/>
              </i>
            </button>
          </h2>
        </div>

      </div>
    </section>
  )
}

export default index