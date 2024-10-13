import { useState } from 'react';
import './App.css';
import './auroral.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav aria-label='navbar' className="w-full h-24 flex flex-row items-center justify-between px-12 py-5 gap-5">
        <img aria-label='icon' src="/vite.svg"  className='border border-black bg-black h-full aspect-square' />
        {/* <div className="">TEXT 1</div> */}
        <div className='flex flex-row items-center justify-evenly gap-12'>
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </div>
        <div className=''>TEXT 3</div>
      </nav>
      <div className='flex flex-col h-screen w-screen '>
        
          <div
            className='h-[40%] relative flex flex-row w-full justify-between shine-gradient'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {/* <div className=' absolute h-full w-full flex flex-row justify-end items-center pr-36 z-[-1] texture'> */}
              {/* <img aria-label='icon' src="/vite.svg"  className={`h-[60%]  aspect-square transition-all duration-700 ${isHovered ? "blur-none" : "blur-md"}`} /> */}
              {/* <img aria-label='icon' src="/vite.svg"  className='h-[60%] aspect-square blur-md' /> */}
              {/* <img aria-label='icon' src="/vite.svg"  className='h-[60%]  aspect-square' />
              <img aria-label='icon' src="/vite.svg"  className='h-[60%]  aspect-square' /> */}

            {/* </div> */}
            <div className=' absolute h-full w-full flex flex-row justify-end items-center pr-36 z-[-1] gradient'>
            </div>
          
              <div aria-label='left-side' className='flex flex-col w-[40%] mx-12 mt-16'>
                <div aria-label='icon-app-company' className='flex flex-row pb-6 gap-6'>
                    <img aria-label='icon' src="/vite.svg"  className='border border-black bg-black h-full aspect-square' />
                    <div aria-label='title-company' className='flex flex-col gap-2'>
                        <div aria-label='title' className='text-3xl'>
                            The Lord Of The Rings
                        </div>
                        <div aria-label='company' className='text-2xl'>
                            Company Name
                        </div>
                    </div>
                </div>

                <div aria-label='buttons' className='flex flex-row gap-3 text-sm'>
                  <button className='bg-white text-black rounded-full p-4 '>
                     <div className=''>
                        VIEW IN APP STORE
                      </div> 
                  </button>
                  <button className='bg-white text-black rounded-full p-4'>
                     <div className=''>
                        VIEW IN APP STORE
                      </div> 
                  </button><button className='bg-white text-black rounded-full p-4'>
                     <div className=''>
                        VIEW IN APP STORE
                      </div> 
                  </button>
                </div>
              </div>
              <div aria-label='right-side' className='flex flex-col w-[60%] mx-12 mt-16'>
                  <div className='w-full font-medium'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                  </div>
                  <div className='flex flex-row w-full justify-start gap-72 p-4'>
                      <div>
                        iphone
                      </div>
                      <div>
                        iphone
                      </div>  <div>
                        iphone
                      </div>
                  </div>
              </div>

              <div aria-label="cut" className='absolute -bottom-4 flex flex-row justify-center left-[15%] -translate-x-1/2 w-1/6 py-4 bg-white rounded-t-xl'>
                <div>
                  UI Elements
                </div>
              </div>
          </div>


          <div className='flex flex-row h-[70%]'>
          </div>
          
      </div>
    </>
  )
}

export default App
