import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile, faLink, faCircle} from '@fortawesome/free-solid-svg-icons'
import resume from '../../src/pdf/MARK_TEDRA.pdf'


const Main = () => {
  return (
    <div id="main">
        <div className='text-left'>
            <div className='pt-36 flex flex-col max-w-xl m-auto h-full item-center justify-center start leading-relaxed'>
            <h1><FontAwesomeIcon icon={faCircle} color='green'/> Online.</h1>
            <p className='text-5xl font-semibold'>Hello, My name is Teds</p>
            <h1 className='text-transparent text-5xl font-semibold bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'>Web Developer.</h1>
            <div className='flex grid-cols-3 gap-2 text-center item-left my-8'>
            <a className='p-4 px-8 transition ease-in-out delay-75 bg-black hover:-translate-y-1 hover:scale-110 hover:text-amber-500 rounded-lg  hover:bg-gray-500 duration-300' href="https://www.linkedin.com/in/mtedra789" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /> linkedIn</a>
            <a className='p-4 px-8 transition ease-in-out delay-75 bg-black hover:-translate-y-1 hover:scale-110 hover:text-amber-500 rounded-lg  hover:bg-gray-500 duration-300' href="mailto:marktedra29@gmail.com?body="  rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/> Email</a>
            <a className='p-4 px-8 transition ease-in-out delay-75 bg-black hover:-translate-y-1 hover:scale-110 hover:text-amber-500 rounded-lg  hover:bg-gray-500 duration-300' href={resume} download="TEDRA_MARK"  target="_blank" ><FontAwesomeIcon icon={faFile} /> Résumé</a>
            </div>
            <p className="border-gray-500 border-b-2 rounded pb-4 p-2">Hi, I am Tedra Mark V, Aspiring Web-Developer. I graduated in Arellano University Pasig,
            with a degree of Bachelor of Science in Information Technology(BSIT). Ready to create innovative web solution.</p>
            </div>
        </div>
    </div>
  )
}

export default Main