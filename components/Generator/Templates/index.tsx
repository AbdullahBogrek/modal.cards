import { useModalContext } from "../../../contexts/ModalContext";

const index = () => {
  const { setId, setAppearance } = useModalContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setId(Number(event.currentTarget.id)),
    setAppearance(true)
  };

  return (
    <div className='px-5 xl:px-0'>
      <div className="flex items-center">
        <span className='enerator-title'><p className='generator-title-number'>1</p></span>
        <h5 className='generator-title-text'>Choose your template</h5>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          <div className="templates">
          
            <img src="/assets/01.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="1" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/02.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="2" onClick={handleClick}>Select template</button>
            </div>

          </div>
    
          <div className="templates">
          
            <img src="/assets/03.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="3" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/04.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="4" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/05.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="5" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/06.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="6" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/07.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="7"  onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/08.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="8" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/09.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="9" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/10.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="10" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/11.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="11" onClick={handleClick}>Select template</button>
            </div>

          </div>
          
          <div className="templates">
          
            <img src="/assets/12.png" className='absolute z-0"'/>
            
            <div className='templates-container group'>
              <button className='templates-container-button group-hover:block' id="12" onClick={handleClick}>Select template</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default index