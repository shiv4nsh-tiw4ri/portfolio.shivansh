import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[80px] leading-[80px] flex items-center my-5'>
       <div className='container'>
         <div className='flex items-center gap-[10px] justify-between'>
            {/*--------logo--------*/}
            <div className='flex items-center gap-[10px]'>
            <span className='w-[45px] h-[45px] text-white bg-gray-600 text-[25px] font-[700]
            rounded-full flex items-center justify-center font-logoText shadow'>
                S
            </span>

            <div className='leading-[20px]'>
                <h2 className='text-3xl text-gray-600 font-[400]  font-logoText'>Hey Dev.</h2>
                <p className='text-gray-400 text-[16px] font-[500]'>Personal</p>
            </div>
            </div>

            {/*--------logo ends here------*/}
            
             {/*----------menu main-----*/}
            <nav className='menu'>
                <ul className=' flex items-center gap-7 text-[20px]  text-gray-600 font-[500]   cursor-pointer'>
                    <li className='hover:text-gray-400 transition-colors duration-300 ease-in'>
                      <a href="#about">About</a>
                    </li>
                    <li className='hover:text-gray-400 transition-colors duration-300 ease-in'>
                      <a href="#skills">Skills</a>
                    </li>
                    <li className='hover:text-gray-400 transition-colors duration-300 ease-in'>
                       <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className='hover:text-gray-400 transition-colors duration-300 ease-in'>
                       <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            
            {/*----------right menu-----*/}
            <div className='flex items-center gap-4'>
              <button className='flex items-center gap-2 text-gray-600  font-[600] border border-2 px-4 py-2
              rounded-[25px] max-h-[40px] hover:bg-black hover:text-white hover:font-[500] ho transition duration-300 ease-in-out'>
                <i class="ri-send-plane-line"></i>Let's Talk
              </button>

              <span className='text-2xl text-gray-400 md:hidden cursor-pointer'>
              <i class="ri-menu-line"></i>
              </span>

            </div>



         </div>
       </div>
    </header>
  )
}

export default Header
