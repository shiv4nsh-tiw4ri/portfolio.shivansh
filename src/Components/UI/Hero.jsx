import React from 'react'
import homeImg from '../../assets/homePic.jpg';



const Hero = () => {
  return (
    <div className='pt-0 my-5' id='#' >
      <div className='container pt-14'>
        <div className='md:flex items-center justify-center sm:flex-col md:flex-row'>
           
           <div className='w-full md:basis-1/2 mt-10 sm:mt-2'>
                <figure className='flex items-center justify-center sm:mb-5 md:mb-0'>
                  <img src={homeImg} alt='myPicture'
                  className='rounded-full sm:w-[240px] md:w-[400px]  sm:h-auto md:h-auto'
                  data-aos='fade-right' data-aos-duration='1500'>  
                  </img>

                </figure>
           </div>
           <div className='w-full md:basis-1/2  items-center '>
              
              <div className='flex flex-col items-center'>
                 <h5 data-aos='fade-left' data-aos-duration='1500'
                 className='text-gray-400 font-[600] text-[20px]'
                 >
                 Hello I'm
                 </h5>
                 <h1 data-aos="fade-up"
                 data-aos-duration='1500' 
                 className='text-black font-[700] text-[1.8rem] sm:text-[40px]'
                 >
                 Shivansh Tiwari
                 </h1>
                 <h4 data-aos="fade-up"
                 data-aos-duration='1500' 
                 className='text-gray-400 font-[500] text-[0.6rem] sm:text-[24px] p-0'
                 >
                 Frontend Developer
                 </h4>
   
                 <div className='flex items-center gap-4 mt-7 sm:flex-col md:flex-row'>
                   <div data-aos='fade-right'
                   data-aos-duration='1800'
                   data-aos-delay='200'
                   >
                     <a href='https://drive.google.com/file/d/1F3LC5v_ibE56856FzyFwSAKnFVtt7Euq/view?usp=drivesdk'>
                         <button
                         className='px-3 py-2 border border-2 border-gray-600 
                         rounded-full text-gray-600 text-sm font-[500]
                         hover:bg-gray-600 hover:text-white tranisiton duration-300 ease-in-out shadow'
                         >
                         Download CV</button>
                     </a>
                   </div>
                  
   
                   <div data-aos='fade-left'
                   data-aos-duration='1800'
                   data-aos-delay='200'
                   >
                     <a href='#'>
                         <button
                         className='px-3 py-2 border border-2 border-gray-600 
                         rounded-full text-white bg-gray-600 text-sm font-[500]
                         hover:bg-white hover:text-gray-600 tranisiton duration-300 ease-in-out shadow'
                         >
                         Contact Info</button>
                     </a>
                   </div>
                   </div>

                   <div className='flex items-center gap-2'>
                     <div data-aos='fade-right'
                      data-aos-duration='1800'
                      data-aos-delay='200'
                     >
                       <a href='#'>
                           <button
                           className=' md:text-[40px] sm:text-[30px]
                           rounded-full text-black 
                            hover:text-gray-600 transition-colors duration-300'
                           >
                            <i class="ri-linkedin-fill"></i>
                           </button>
                       </a>
                      </div>
     
                     <div data-aos='fade-left'
                      data-aos-duration='1800'
                      data-aos-delay='200'
                     >
                       <a href='#'>
                           <button
                           className=' md:text-[40px] sm:text-[30px]
                           rounded-full text-black 
                           hover:text-gray-600 transition-colors duration-300 '
                           >
                           <i class="ri-github-fill"></i>
                           </button>
                       </a>
                     </div>

                    </div>
  
                </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
