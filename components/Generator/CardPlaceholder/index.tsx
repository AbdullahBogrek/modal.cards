import React from 'react'

const index = () => {
  return (
    <div className={`flex flex-col w-[600px] justify-center items-center px-16`} >
        <div className="inline-flex justify-center items-center mb-6 rounded-full">
            <img src="/assets/start_building.svg"/>
        </div>

        <h2 className={`font-secondary font-bold text-3xl mb-4`}>Please select a template to create a modal.</h2>
        <h4 className={`font-secondary font-normal text-xl mb-8`}>Update the template quickly and easily, and embed the code you created in your own code.</h4>
    </div>
  )
}

export default index