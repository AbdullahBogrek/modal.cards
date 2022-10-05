const index = () => {
    return (
        <div className="max-w-[800px] h-[468px] rounded-[40px] overflow-hidden -mt-[330px] z-0 mb-[120px] hidden md:block">
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
                            <p className="font-primary font-normal text-[12px] leading-4 text-[##777777] pr-10">By signing up, you agree to Privacy Policy and Terms of Use.</p>
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
    )
  }
  
  export default index