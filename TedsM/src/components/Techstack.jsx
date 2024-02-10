import React from 'react'
import img1 from '../assets/php.png'
import img2 from '../assets/java.png'
import img3 from '../assets/JavaScript.png'
import img5 from '../assets/html.png'
import img6 from '../assets/css.png'
import img7 from '../assets/tailwind.png'
import img8 from '../assets/boostrap.png'
import img9 from '../assets/vite.png'
import img10 from '../assets/git.png'
import img11 from '../assets/mysql.png'
import img12 from '../assets/vb.png'
import img13 from '../assets/react.svg'
import img14 from '../assets/laravel.png'
import img16 from '../assets/Android_Studio_icon.png'
import img17 from '../assets/Visual_Studio.png'
import '../components/Nav'



const Techstack = () => {
  return (
    <section id='Techstack'>
        <div className='flex-col max-w-xl m-auto h-full item-center justify-center text-left mt-3  border-gray-500 border-b-2 rounded pb-4'>
            <p className='text-2xl font-semibold pb-5'>Tech Stack</p>
            <p className='text-2xl font-semibold pb-5 text-center'>Programming Languages</p>
            
          <div className='flex flex-wrap justify-center gap-16'>
              <div className='flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className='object-contain h-12 w-18' src={img1} alt="" />
                <span className='items-center'>PHP</span>
              </div>
              
              <div className='  flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12' src={img2} alt="" />
                <span className='items-center'>Java</span>
              </div>

              <div className=' flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12' src={img3} alt="" />
                <span className='items-center'>JavaScript</span>
              </div>
          </div>
          
          <p className='text-2xl font-semibold py-5 text-center '>FrontEnd</p>
          <div className='flex flex-wrap justify-center gap-16'>
              <div className='flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className='object-contain h-12 w-18' src={img5} alt="" />
                <span className='items-center'>HTML</span>
              </div>
              
              <div className='  flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12' src={img6} alt="" />
                <span className='items-center'>CSS</span>
              </div>

              <div className=' flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12 ' src={img8} alt="" />
                <span className='items-center'>Boostrap</span>
              </div>
          </div>

          <p className='text-2xl font-semibold py-5 text-center '>Tools and Database</p>
          <div className='flex flex-wrap justify-center gap-16'>
              <div className='flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className='object-contain h-12 w-18' src={img9} alt="" />
                <span className='items-center'>Vite</span>
              </div>

              <div className=' flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12' src={img12} alt="" />
                <span className='items-center'>VB</span>
              </div>

              
              <div className='  flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12' src={img10} alt="" />
                <span className='items-center'>GIT</span>
              </div>


              <div className='flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className='object-contain h-12 w-18' src={img16} alt="" />
                <span className='items-center'>Android Studio</span>
              </div>

              <div className='flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className='object-contain h-12 w-18' src={img17} alt="" />
                <span className='items-center'>VS 2022</span>
              </div>

              <div className=' flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12' src={img11} alt="" />
                <span className='items-center'>MySQL</span>
              </div>
            </div>
          
          <p className='text-2xl font-semibold py-5 text-center '>Currently Studying</p>
          <div className='flex flex-wrap justify-center gap-16'>
              <div className='flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className='object-contain h-12 w-12' src={img7} alt="" />
                <span className='items-center'>Tailwind</span>
              </div>

              <div className=' flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12' src={img13} alt="" />
                <span className='items-center'>React</span>
              </div>

              
              <div className='  flex flex-col items-center justify-center rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'>
                <img className=' object-contain h-12 w-12' src={img14} alt="" />
                <span className='items-center'>laravel</span>
              </div>

          </div>
        </div>
    </section>
  )
}

export default Techstack