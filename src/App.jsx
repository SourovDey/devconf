import 'react'
import './App.css'


function App() {

  return (
    <>
      <div className="header-block w-full h-full bg-[length:100%_100%] bg-top bg-no-repeat absolute bottom-0 left-0 z-[-1] bg-[url('https://devconfbd.com/images/hero-pattern-opacity.png')] ">
        <div className="container w-11/12 m-auto mt-14">
          <div className="container-row lg:flex xl:flex">
            <div className="header-block-right lg:w-2/4 xl:w-2/4 md:w-full sm:w-full">
              <a href="#"><img className='w-[300px] h-[35px] mb-3 inline' src="https://devconfbd.com/images/sponsors/technonext-presents.svg" alt="technonext-presents" /></a>
              <img className='w-[350px] h-[56px]' src="https://devconfbd.com/images/logo.svg" alt="devconf" />
              <div className="bkshAndSowcase mt-3 flex w-[340px] mb-5">
                <a href="#" className='pr-6'><img className='w-[76px] h-[40px] inline lg:block place-self-start' src="https://devconfbd.com/images/sponsors/bkash-red.svg" alt="bkash" /></a>
                <a href="#" className='pl-6 border-l-2 border-slate-300'><img className='w-[194] h-[40px] inline lg:block place-self-start' src="https://devconfbd.com/images/sponsors/showwcase-logo.svg" alt="sowcase" /></a>
              </div>
              <h1 className='font-extrabold mb-4 lg:mb-8 text-gradient hero-title text-3xl lg:text-5xl lg:text-left mt-8'>The 2023 Developer Conference</h1>
              <p className='mb-4 lg:mb-8 font-light lg:text-left'>Uncover the Power of Code: Join us at the Developer's <br/> Conference 2023 organized by <span> </span>
              <a href="" className='text-gradient bg-gradient-to-r from-[#7BEFFF] to-[#07C926]'>Learn with Sumit</a></p>
              <div className="inline-block text-center">
                <a href="" className='rounded-lg inline-block font-semibold py-2.5 px-5 btn-md bg-gradient-to-r from-[#4BA2D3] to-[#7335FE] to-[99%] hover:scale-105 transition-all duration-500  mb-4'>
                  Register is Closed
                </a>
                <div className='opacity-70  font-light text-sm'>
                  only 400 tickets available
                </div>
              </div>
            </div>
            <div className="header-block-left lg:w-2/4 xl:w-2/4 md:w-full sm:w-full">
              <div className='lg:order-2 lg:col-span-6 lg:pt-16 px-0 lg:px-10 my-[70px] lg:my-0'>
                <div className="borders drop-shadow-[0_0px_40px_rgba(54,213,140,0.4)] overflow-hidden border-4 rounded-md border-green-500">
                      <div className="video overflow-hidden relative h-0 pb-[56.25%] rounded-md">
                        <iframe src="https://www.youtube.com/embed/WuPr3n1nu6U" width={"853px"} height={"480px"} className="top-0 left-0 h-full w-full absolute align-middle block" frameborder="0" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
