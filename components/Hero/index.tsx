const index = () => {
  return (
    <>
      <section className="hero-section bg-white">
        <div className="grid max-w-[1194px] mx-auto pt-14 md:pt-20 lg:pt-24 pb-[150px]">
          <div className="max-w-sm md:max-w-md lg:max-w-lg mb-4 px-5 xl:px-0">
              <h1 className="font-semibold font-primary text-5xl leading-12 lg:text-7xl lg:leading-20">Simple modal card creator</h1>
          </div>        
          <div className="max-w-6xl mb-16 px-5 xl:px-0">
            <p className="tracking-tight font-normal font-primary text-black text-xl md:text-2xl lg:text-3xl lg:leading-11">A utility-first CSS framework packed with classeslike flex, pt-4, text-center and rotate-90 that can becomposed to build any design, directly in your markup.</p>
          </div>
          <div className="mb-8 px-5 xl:px-0">
            <button type="button" className="btn px-4 py-5 text-sm lg:px-8 lg:py-5 lg:text-lg font-medium text-center">
              Try it out now
            </button> 
          </div>
          <div className="flex flex-col md:flex-row pb-24 px-5 xl:px-0 mb-[90px]">
            <div className="hero-section-features mb-5 md:mb-0">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="hero-section-features-items">Free and paid plans</span>
            </div>
            <div className="hero-section-features mb-5 md:mb-0">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="hero-section-features-items">Setup in minutes</span>
            </div>
            <div className="hero-section-features">
              <i className="mr-2">
                <img src="/assets/check.svg" className="w-4"/>
              </i>
              <span className="hero-section-features-items">No credit card required*</span>
            </div>
          </div>  
        </div>
      </section>

      <section className="hero-section-stats">
        <div className="grid max-w-[1194px] mx-auto pt-14 md:pt-20 lg:pt-24 px-5 xl:px-0">

          <div className="max-w-[800px] h-[468px] rounded-[40px] overflow-hidden -mt-[330px] z-0 mb-[120px]">
            <div className="flex flex-row h-full">

              <div className="w-1/2 bg-white">
                <div className="flex flex-col px-[50px] text-center justify-center h-full">
                  <div className="mx-auto mb-[32px]">
                    <img src="/assets/camper_logo.svg"/>
                  </div>
                  <div className="font-primary font-semibold text-[40px] leading-[54px] tracking-wide mb-2">
                    <p>Join the club</p>
                  </div>
                  <div className="mb-6">
                    <p className="font-primary font-normal text-lg text-black px-2">Subscribe and Get an Extra <span className="font-semibold underline">25% Off</span> on your first purchase.</p>
                  </div>
                  <div className="mb-3">
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5" placeholder="Email address" disabled/>
                  </div>
                  <div className="mb-4">
                    <button type="button" className="text-white bg-black rounded-xl font-primary font-semibold text-base w-full px-28 py-3 mr-2 mb-2" disabled>Subscribe</button>
                  </div>
                  <div className="text-left">
                    <p className="font-primary font-normal text-[12px] leading-4 text-accordion-gray pr-10">By signing up, you agree to Privacy Policy and Terms of Use.</p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 relative">
                <img src="/assets/camper_image.png" alt="camper image" className="bg-fixed bg-no-repeat bg-cover absolute inset-0 bg-center z-0"/>
                <div className="relative h-full">
                  <h3 className="absolute text-2xl text-white top-6 right-6">
                    <div className="bg-white w-[42px] h-[42px] rounded-full flex justify-center items-center">
                      <img src="/assets/close.svg" className="w-5 h-5"/>
                    </div>
                  </h3>
                  <h3 className="absolute text-white font-primary font-semibold text-4xl tracking-wide bottom-8 left-8">
                    Mediterranean Sneakers®
                  </h3>
                </div>  
              </div>

            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center mb-[130px]">
            <div className="hero-section-stats-col">
              <p className="hero-section-stats-numbers">3x</p>
              <p className="hero-section-stats-description">Increase</p>
              <p className="hero-section-stats-description">Conversion Rate</p>
            </div>
            <div className="hero-section-stats-col">
              <p className="hero-section-stats-numbers">120%</p>
              <p className="hero-section-stats-description">Email</p>
              <p className="hero-section-stats-description">Subscribers</p>
            </div>
            <div className="hero-section-stats-col">
              <p className="hero-section-stats-numbers">390%</p>
              <p className="hero-section-stats-description">More Customer</p>
              <p className="hero-section-stats-description">Engagement</p>
            </div>
            <div className="h-32 text-white text-center lg:text-left">
              <p className="hero-section-stats-popupsmart">Popupsmart meets</p> 
              <p className="hero-section-stats-popupsmart">all your business</p>
              <p className="hero-section-stats-popupsmart">needs.</p>
            </div>
          </div>
        </div>
      </section>
      

    </>
  )
}

export default index