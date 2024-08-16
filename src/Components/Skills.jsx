import React from 'react'
import { BsFiletypeSql } from "react-icons/bs";

const Skills = () => {
  return (
    <section id='skills'>
        <div className='container lg:pt-5'
        data-aos="fade-up" data-aos-duration='1500'>
            <div className='text-center'>
                <h2 className='text-black font-[700] text-[2rem] tracking-[.05em]'
                >
                 Skills
                </h2>
                <h4 className='text-gray-400 font-[500] tracking-[0.02em]'>My technical levels</h4>
                <p className='lg:max-w-[600px] lg:mx-auto text-gray-600 font-[500] text-[16px] leading-7 mt-4'>I am proficient in web development technologies such as HTML, CSS, JavaScript, ReactJS, Bootstrap, and Tailwind CSS.
                   I also have a solid understanding of Core Java, SQL, Git, and Data Structures & Algorithms (DSA). My dedication to problem-solving 
                   is evident in the fact that I've solved over 400 questions on platforms like LeetCode, GeeksforGeeks, and HackerRank.
                </p>
               </div>
        </div>

        <div className='flex flex-col justify-center items-center sm:py-12 md:py-4'>
            <div className='w-full py-3 px-2 sm:max-w-xl  md:max-w-4xl  sm:mx-auto sm:px-0'>
              <div className='relative antialiased text-gray-700  text-sm font-semibold'>
                <div className='mt-6 sm:mt-0 sm:mb-12 md:mb-4'>
                   <div className='flex items-center flex-col sm:flex-row'>
                      
                      <div className='flex sm:flex-col md:flex-row sm:gap-y-4 w-full mx-auto justify-center items-center'>
                        
                        <div className='w-full sm:w-1/2 md:w-2/5 sm:pr-8'>
                            <div 
                              data-aos='fade-right' data-aos-duration='1200' 
                              className='flex flex-col justify-center items-center md:mx-12 sm:mx-0 p-4 rounded-xl 
                                shadow-[inset_0_0px_7px_rgba(0,0,0,0.3)] border  border-gray-400 cursor-pointer space-y-3 
                                hover:shadow-[rgba(0,0,0,0.4)_0px_5px_15px] transition-all duration-300 ease-in'>
                                <h3 className='text-gray-700 font-[700] text-lg'>Frontend Development</h3>
                                <div className='flex flex-col items-center justify-around '>
                                  <ul className='space-y-3 font-[500]'>
                                      <li><span className='text-xl'><i class="ri-html5-line"></i></span> HTML</li>
                                      <li><span className='text-xl'><i class="ri-css3-line"></i></span>  CSS</li>
                                      <li><span className='text-xl'><i class="ri-javascript-line"></i></span> JavaScript</li>
                                      <li><span className='text-xl'><i class="ri-reactjs-line"></i></span> ReactJS</li>
                                      <li><span className='text-xl'><i class="ri-bootstrap-line"></i></span> BootStrap</li>
                                      
                                  </ul>
                                </div>
                            </div>
                        </div>

                    
                          <div className='w-full sm:w-1/2 md:w-2/5  sm:pr-8 '>
                            <div 
                              data-aos='fade-left' data-aos-duration='1200' 
                              className='flex flex-col justify-center items-center md:mx-12 sm:mx-0 p-4 rounded-xl 
                                shadow-[inset_0_0px_7px_rgba(0,0,0,0.3)] border  border-gray-400  cursor-pointer space-y-3 
                                hover:shadow-[rgba(0,0,0,0.4)_0px_5px_15px] transition-all duration-300 ease-in'>
                                <h3 className='text-gray-700 font-[700] text-lg'>Additional Skills</h3>
                                <div className='flex flex-col'>
                                  <ul className='space-y-3 font-[500]'>
                                      <li><span className='text-xl'><i class="ri-java-fill"></i></span> Java</li>
                                      <li><span className='text-xl'><i class="ri-macbook-line"></i></span> MySQL</li>
                                      <li><span className='text-xl'><i class="ri-bubble-chart-line"></i></span> Data Structures & Algo</li>
                                      <li><span className='text-xl'><i class="ri-braces-line"></i></span> 400+ Coding Questions</li>
                                      <li><span className='text-xl'><i class="ri-git-close-pull-request-line"></i></span> Git</li>
                                  </ul>
                                </div>
                              </div>
                          </div>
                      </div>                           
                   </div>
                </div>

              </div>
    
            </div>

        </div>
    </section>
  )
}

export default Skills
