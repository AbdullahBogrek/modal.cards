import Card from "./Card";

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

          <Card />

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