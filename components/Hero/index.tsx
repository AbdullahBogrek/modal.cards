const index = () => {
  return (
    <>
      <section className="hero-section bg-white">
        <div className="grid max-w-[1194px] mx-auto pt-24">
          <div className="max-w-lg mb-4">
              <h1 className="font-semibold font-primary text-7xl leading-20">Simple modal card creator</h1>
          </div>        
          <div className="max-w-6xl mb-16">
            <p className="tracking-tight font-normal font-primary text-black text-3xl leading-11">A utility-first CSS framework packed with classeslike flex, pt-4, text-center and rotate-90 that can becomposed to build any design, directly in your markup.</p>
          </div>
          <div className="mb-8">
            <button type="button" className="btn px-8 py-5 text-lg font-medium text-center">
              Try it out now
            </button> 
          </div>
          <div className="flex pb-24">
            <div className="inline-flex items-center mr-5">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="font-primary text-xs font-normal">Free and paid plans</span>
            </div>
            <div className="inline-flex items-center mr-5">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="font-primary text-xs font-normal">Setup in minutes</span>
            </div>
            <div className="inline-flex items-center mr-5">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="font-primary text-xs font-normal">No credit card required*</span>
            </div>
          </div>  
        </div>
      </section>
    </>
  )
}

export default index