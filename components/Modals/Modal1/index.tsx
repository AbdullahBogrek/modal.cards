import { useEffect } from 'react'
import { useModal1Context } from "../../../contexts/Modal1Context";

const index = () => {
  const { size, position, textColor, buttonColor, placeholderColor, borderColor, backgroundColor, logo } = useModal1Context();
  
  useEffect(()=> {
     console.log(textColor) 
  }, [textColor])

  return (

          <div className={`flex flex-col w-[480px] h-[446px]  justify-center items-center  px-16 relative shadow-2xl`} style={{backgroundColor: `${backgroundColor}`}}>
            <div className="inline-flex justify-center items-center w-[90px] h-[90px] mb-6 rounded-full" style={{backgroundColor: `${buttonColor}`}}>
              <img src={logo} className='w-12 h-12'/>
            </div>

            <h2 className={`font-secondary font-bold text-3xl mb-4`} style={{color: `${textColor}`}}>Security Code</h2>
            <h4 className={`font-secondary font-normal text-xl mb-8`} style={{color: `${textColor}`}}>This code expires in 24 hours</h4>

            <input type="text" className="w-full border text-base font-secondary font-normal rounded-lg p-[15px] mb-6" placeholder="Code" required style={{color: `${textColor}`, borderColor: `${borderColor}`}}/>

            <div className="grid grid-cols-2 gap-5 w-full">
              <button className={`outline outline-offset-0 outline-1 font-secondary font-medium text-base py-3.5 rounded-lg`} style={{outlineColor: `${borderColor}`, backgroundColor: `${backgroundColor}`, color: `${textColor}`}}>Cancel</button>
              <button className='font-secondary font-medium text-white text-base py-3.5 rounded-lg' style={{backgroundColor: `${buttonColor}`}}>Continue</button>
            </div>
            
            <div className="absolute top-5 right-5">
              <img src="/assets/modal_close_black.svg" className='w-9 h-9'/>
            </div>
          </div>
  )
}

export default index