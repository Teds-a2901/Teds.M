import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'
const Timeline = () => {
  return (
    <section id='Timeline'>
        <div className='max-w-xl m-auto h-full item-center justify-center text-left mt-3 border-gray-500 border-b-2 rounded pb-4'>
        <p className='text-2xl font-semibold pl-0 pb-5'>My Timeline</p>
          <li className='list-none relative flex gap-8 pt-5'>
          <a className='mt-1 z-10'><FontAwesomeIcon icon={faCircle} color='orange'/></a>
          <div className='before:absolute before:left-[7.2px] before:top-[30.5px] before:h-full before:w-[1.5px] before:bg-orange-300'>
          </div>
          <div>
          <p className='text-transparent text-lg font-semibold bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>JAN - APR - 2023</p>
          <p>Intern Developer in Noah Business Application</p>
          <p>I am responsible for quality assurance testing in a specific
            project, testing the functionality and efficiency of the
            application. Additionally, I have created report documents
            that details the errors and bugs to address all the issues within
            the application.</p>
          </div>
          </li>

          <li className='list-none relative flex gap-8 pt-5'>
          <a className='mt-1 z-10'><FontAwesomeIcon icon={faCircle} color='orange'/></a>
          <div className='before:absolute before:left-[7.2px] before:top-[30.5px] before:h-full before:w-[1.5px] before:bg-gray-500'>
          </div>
          <div>
          <p className='text-transparent text-lg font-semibold bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>2019-2023</p>
          <p>Arellano University Andres Bonifacio Pasig</p>
          <p>Bachelor of Science In Information Technology</p>
          </div>
          </li>
          
          <li className='list-none relative flex gap-8 pt-5'>
          <a className='mt-1 z-10'><FontAwesomeIcon icon={faCircle} color='gray'/></a>
          <div className='before:absolute before:left-[7.2px] before:top-[16.5px] before:h-full before:w-[1.5px] before:bg-gray-500'>
          </div>
          <div>
          <p className='text-transparent text-lg font-semibold bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>2017-2019</p>
          <p>Arellano University Andres Bonifacio Pasig</p>
          <p>Information Communication Technology</p>
          </div>
          </li>
          
          <li className='list-none relative flex gap-8 pt-5'>
          <a className='mt-1 z-10'><FontAwesomeIcon icon={faCircle} color='gray'/></a>
          <div className='before:absolute before:left-[7.2px] before:top-[16.5px] before:h-full before:w-[1.5px] before:bg-gray-500'>
          </div>
          <div>
          <p className='text-transparent text-lg font-semibold bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>2013-2017</p>
          <p>Nagpayong HighSchool</p>
          </div>
          </li>

          <li className='list-none relative flex gap-8 pt-5'>
          <a className='mt-1 z-10'><FontAwesomeIcon icon={faCircle} color='gray'/></a>
          <div className='before:absolute before:left-[7.2px] before:top-[16.5px] before:h-full before:w-[1.5px] before:bg-gray-500'>
          </div>
          <div>
          <p className='text-transparent text-lg font-semibold bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>2019-2023</p>
          <p>Arellano University Andres Bonifacio Pasig</p>
          <p>Bachelor of Science In Information Technology</p>
          </div>
          </li>

          <li className='list-none relative flex gap-8'>
          <a className='mt-1 z-10'><FontAwesomeIcon icon={faCircle} color='gray'/></a>
          <div className=''>
          </div>
          <div>
          <p className='text-transparent text-lg font-semibold bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text '>2007-2013</p>
          <p clas>Ilugin Elementary School Pasig City</p>
          </div>
          </li>
        </div>
    </section>
  )
}

export default Timeline