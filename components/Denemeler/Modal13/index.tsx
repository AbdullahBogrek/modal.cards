import React from 'react'

const index = () => {
  return (
    <div className='px-5 xl:px-0 mt-18'>
      <div className="flex items-center">
        <span className='w-9 h-9 rounded-full flex justify-center items-center bg-generator-gray'><p className='font-primary font-semibold text-xs tracking-wide'>2</p></span>
        <h5 className='ml-3 font-primary font-semibold text-lg leading-9 tracking-wide text-black'>Appearance <span className='font-primary font-normal text-lg tracking-wide leading-9 text-black'>(Size, color, logo)</span></h5>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-1/3 mr-20">

          <div className="mb-6">
            <h6 className='mb-3 font-secondary text-sm text-black'>Size</h6>
            <div className="w-[290px] h-12 bg-soft-gray rounded-xl">
              <button className='py-[15px] px-[23px] rounded-[10px] mx-[3px] font-secondary font-semibold text-sm text-accordion-gray'>Small</button>
              <button className='py-[15px] px-[23px] rounded-[10px] mx-[3px] font-secondary font-semibold text-sm text-accordion-gray'>Medium</button>
              <button className='py-[15px] px-[23px] rounded-[10px] mx-[3px] font-secondary font-semibold text-sm text-accordion-gray'>Large</button>
            </div>  
          </div>

          <div className="mb-6">
            <h6 className='mb-3 font-secondary text-sm text-black'>Position</h6>
            <div className="grid grid-cols-3 gap-1 w-[82px] h-[55px]">
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
              <div className="w-6 h-4 border border-deneme hover:bg-primary focus:bg-primary"></div>
            </div>
          </div>

          <div className="mb-6">
            <h6 className='mb-3 font-secondary text-sm text-black'>Colors</h6>
            <div className="flex flex-row gap-2">
              <div className="w-[42px] h-[42px] rounded-[10px] border">1</div>
              <div className="w-[42px] h-[42px] rounded-[10px] border">2</div>
              <div className="w-[42px] h-[42px] rounded-[10px] border">3</div>
              <div className="w-[42px] h-[42px] rounded-[10px] border">4</div>
              <div className="w-[42px] h-[42px] rounded-[10px] border">5</div>
            </div>
          </div>

          <div className="">
            <h6 className='mb-3 font-secondary text-sm text-black'>Upload Logo</h6>
            <div className="flex items-center">
              <label htmlFor="dropzone-file" className="flex w-[378px] h-[178px] flex-col justify-center items-center bg-white rounded-xl border-2 border-deneme border-dashed cursor-pointer">
                <div className="flex flex-col justify-center items-center w-20 h-20 bg-white rounded-xl">                   
                  <img src="/assets/drop_image.svg" className='w-8 h-8'/>
                </div>
                <div className="flex flex-row">
                  <img src="/assets/upload_cloud.svg"/>
                  <p className="font-secondary font-normal text-sm text-black ml-1">Drop your image here or <span className="font-semibold text-primary underline">upload</span></p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>

        </div>
        <div className="bg-red w-full lg:w-2/3">
            <div className="flex flex-col w-[480px] h-[466px] bg-primary justify-center items-center text-center rounded-xl relative">

                <div className="bg-none mb-8">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M85.2178 73.712C84.9628 73.4833 84.6654 73.3071 84.3423 73.1933C84.0192 73.0796 83.677 73.0306 83.335 73.0492C82.993 73.0677 82.6579 73.1536 82.349 73.3016C82.0401 73.4496 81.7635 73.6571 81.5348 73.9121C78.8138 76.9239 75.4914 79.3314 71.782 80.9792C68.0726 82.627 64.0588 83.4785 59.9999 83.4785C55.941 83.4785 51.9272 82.627 48.2178 80.9792C44.5084 79.3314 41.1858 76.9239 38.4648 73.9121C38.2383 73.6499 37.9618 73.4355 37.6515 73.2813C37.3412 73.1272 37.0034 73.0365 36.6576 73.0144C36.3118 72.9922 35.9651 73.0391 35.6377 73.1524C35.3103 73.2657 35.0087 73.4431 34.7506 73.6742C34.4925 73.9053 34.283 74.1854 34.1343 74.4984C33.9856 74.8113 33.9007 75.1508 33.8846 75.4969C33.8686 75.843 33.9216 76.1887 34.0407 76.5141C34.1597 76.8395 34.3423 77.138 34.5779 77.3921C37.7882 80.9505 41.7098 83.7952 46.089 85.7424C50.4682 87.6895 55.2073 88.6956 59.9999 88.6956C64.7924 88.6956 69.5316 87.6895 73.9108 85.7424C78.2899 83.7952 82.2115 80.9505 85.4219 77.3921C85.8833 76.8768 86.1214 76.1993 86.0839 75.5086C86.0464 74.8179 85.7363 74.1703 85.2218 73.708" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M60.0001 114.782C49.165 114.782 38.5732 111.569 29.5642 105.549C20.5552 99.5298 13.5336 90.9738 9.38716 80.9636C5.24076 70.9533 4.15585 59.9383 6.26966 49.3114C8.38348 38.6845 13.6011 28.9231 21.2626 21.2616C28.9242 13.6001 38.6855 8.38249 49.3124 6.26868C59.9393 4.15486 70.9543 5.23977 80.9646 9.38617C90.9749 13.5326 99.5308 20.5542 105.55 29.5632C111.57 38.5723 114.783 49.164 114.783 59.999C114.767 74.5235 108.99 88.4486 98.7199 98.7189C88.4496 108.989 74.5246 114.766 60.0001 114.782ZM60.0001 -0.000976562C48.1332 -0.000976562 36.5328 3.51796 26.6658 10.1108C16.7989 16.7037 9.10853 26.0745 4.56727 37.038C0.0260139 48.0016 -1.16221 60.0656 1.1529 71.7045C3.46802 83.3433 9.18247 94.0343 17.5736 102.425C25.9648 110.817 36.6558 116.531 48.2946 118.846C59.9335 121.161 71.9975 119.973 82.9611 115.432C93.9246 110.891 103.295 103.2 109.888 93.3333C116.481 83.4663 120 71.8659 120 59.999C119.982 44.0918 113.654 28.8415 102.406 17.5934C91.1578 6.34543 75.9073 0.0183225 60.0001 6.10352e-05V-0.000976562Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M80.8662 41.739C77.408 41.743 74.0927 43.1186 71.6475 45.564C69.2023 48.0094 67.8269 51.3249 67.8232 54.7831C67.8232 55.475 68.0981 56.1386 68.5874 56.6279C69.0767 57.1172 69.7403 57.3921 70.4323 57.3921C71.1242 57.3921 71.7878 57.1172 72.2771 56.6279C72.7664 56.1386 73.0413 55.475 73.0413 54.7831C73.0413 52.7075 73.8657 50.7169 75.3334 49.2493C76.801 47.7816 78.7916 46.957 80.8672 46.957C82.9428 46.957 84.9333 47.7816 86.401 49.2493C87.8687 50.7169 88.6932 52.7075 88.6932 54.7831C88.7066 55.4661 88.9874 56.1165 89.4751 56.5947C89.9628 57.073 90.6187 57.3409 91.3018 57.3409C91.9849 57.3409 92.6407 57.073 93.1284 56.5947C93.6161 56.1165 93.8969 55.4661 93.9103 54.7831C93.9066 51.3249 92.5311 48.0094 90.0859 45.564C87.6407 43.1186 84.3254 41.743 80.8672 41.739" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.9569 54.7821C46.9703 55.4651 47.251 56.1155 47.7388 56.5938C48.2265 57.072 48.8823 57.34 49.5654 57.34C50.2485 57.34 50.9044 57.072 51.3921 56.5938C51.8798 56.1155 52.1606 55.4651 52.174 54.7821C52.1438 51.3425 50.7563 48.054 48.3135 45.6324C45.8706 43.2109 42.5702 41.8523 39.1305 41.8523C35.6908 41.8523 32.3902 43.2109 29.9474 45.6324C27.5045 48.054 26.117 51.3425 26.0869 54.7821C26.1003 55.4651 26.381 56.1155 26.8688 56.5938C27.3565 57.072 28.0123 57.34 28.6954 57.34C29.3785 57.34 30.0344 57.072 30.5221 56.5938C31.0098 56.1155 31.2906 55.4651 31.304 54.7821C31.304 52.7064 32.1286 50.7157 33.5963 49.2479C35.0641 47.7802 37.0548 46.9556 39.1305 46.9556C41.2062 46.9556 43.1968 47.7802 44.6646 49.2479C46.1323 50.7157 46.9569 52.7064 46.9569 54.7821Z" fill="white"/>
                    </svg>
                </div>
                
                <h2 className='font-secondary font-bold text-white text-3xl mb-4'>Welcome to talk</h2>
                <h4 className='font-secondary font-normal text-white text-xl leading-6 mb-11 px-16'>Send friends photos, videos, locations, songs, voice messages, and more.</h4>

                <div className="grid grid-cols-1 w-full absolute bottom-0">
                    <button className='bg-black bg-opacity-10 font-secondary font-medium text-white text-xl py-3.5 rounded-lg'>Let’s get started</button>
                </div>
                    
                <div className="absolute top-5 right-5">
                  <button>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M18 3.00001C15.0333 3.00001 12.1332 3.87974 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2598C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33.0018 16.0297 32.6151 14.0783 31.8619 12.2576C31.1088 10.4369 30.004 8.78254 28.6107 7.3893C27.2175 5.99605 25.5632 4.89123 23.7424 4.13806C21.9217 3.38489 19.9704 2.99816 18 3.00001ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3312 7.8365 11.193 9.51473 9.51473C11.193 7.8365 13.3312 6.69361 15.6589 6.23058C17.9867 5.76756 20.3995 6.0052 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3066 30 15.6266 30 18C29.9958 21.1813 28.7301 24.2311 26.4806 26.4806C24.2311 28.7301 21.1813 29.9958 18 30ZM23.385 10.5L18 15.885L12.615 10.5L10.5 12.615L15.885 18L10.5 23.385L12.615 25.5L18 20.115L23.385 25.5L25.5 23.385L20.115 18L25.5 12.615L23.385 10.5Z" fill="white"/>
                    </svg>
                  </button>
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}

export default index