import React from 'react'
import vit from '../assets/vt1.png'
import mrcm from '../assets/mrcm1.png'
import pn from '../assets/pn1.png'
import om from '../assets/om3.png'
import {faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Project = () => {
  return (
    <div id='Project' className='max-w-xl m-auto h-full item-center justify-center text-left mt-3  border-gray-500 border-b-2 rounded pb-10'>
    <p className='text-2xl font-semibold pl-0 pb-5'>Project</p>
    <div className='sm:grid-cols-2 grid grid-cols-1 gap-3'>
              <div className=' bg-black/80 py-5  flex flex-col items-center justify-center rounded-lg px-0 shadow-lg shadow-cyan-500/50'>
                <span className='items-center bg-slate-500 p-1 rounded-md'>Find Vit&Groom</span>
                <img className='p-2' src={vit} alt="" />
                <a className='items-center bg-slate-500 p-1 rounded-md' href="https://github.com/Teds-a2901/Find-Veterinary-Grooming-Services.git" target='_blank' ><FontAwesomeIcon icon={faLaptopCode} /> Source_code</a>
                <span className='items-center'></span>
              </div>

              <div className='bg-black/80 py-5  flex flex-col items-center justify-center rounded-lg px-0 shadow-lg shadow-rose-500/50'>
                <span className='items-center bg-slate-500 p-1 rounded-md'>MRCM</span>
                <img className='p-2' src={mrcm} alt="" />
                <a className='items-center bg-slate-500 p-1 rounded-md' href="https://github.com/Teds-a2901/MRCM.git" target='_blank'><FontAwesomeIcon icon={faLaptopCode} /> Source_code</a>
                <span className='items-center'></span>
              </div>

              <div className='bg-black/80 py-5  flex flex-col items-center justify-center rounded-lg px-0 shadow-lg shadow-yellow-500/50'>
                <span className='items-center bg-slate-500 p-1 rounded-md'>Pharmacia Natin</span>
                <img className='p-2' src={pn} alt="" />
                <a className='items-center bg-slate-500 p-1 rounded-md' href="https://github.com/Teds-a2901/MRCM.git" target='_blank'><FontAwesomeIcon icon={faLaptopCode} /> Source_code</a>
                <span className='items-center'></span>
              </div>

              <div className=' bg-black/80 py-5 flex flex-col items-center justify-center rounded-lg px-0 shadow-lg shadow-violet-500/50'>
                <span className='items-center bg-slate-500 p-1 rounded-md'>Find Vit&Groom</span>
                <img className='p-2 h-25 w-25' src={om} alt="" />
                <a className='items-center bg-slate-500 p-1 rounded-md' href="https://github.com/Teds-a2901/Ofline_Module.git" target='_blank' ><FontAwesomeIcon icon={faLaptopCode} /> Source_code</a>
                <span className='items-center'></span>
              </div>
          </div>




    </div>



  
  )
}

export default Project