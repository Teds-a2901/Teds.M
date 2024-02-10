
import '../App';
import '../components/Techstack'
const Nav = () => {

  return (
      <nav className="bg-zinc-900/90 border-b/50 fixed top-0 inset-x-0  items-center p-5 m-0 z-50">
        <div className="text-white font-normal text-base">
            <button className="px-5 sm:px-20 py-0 hover:text-amber-500 " onClick={() =>{
              const element = document.getElementById('main');
              element?.scrollIntoView({
                block: 'center',
                behavior:'smooth'
              })
            }}>Profile</button>


            <button className=" px-5 sm:px-20 py-0 hidden md:inline-block hover:text-amber-500"  onClick={() =>{
              const element3 = document.getElementById('Techstack');
              element3?.scrollIntoView({
                block: 'center',
                behavior:'smooth'
              })
            }}>Tech Stack</button>

            <button className="px-5 sm:px-20 py-0 hover:text-amber-500"  onClick={() =>{
              const element4 = document.getElementById('Project');
                element4?.scrollIntoView({
                block: 'center',
                behavior:'smooth'
              })
            }}>Project</button>
            <button className="px-5 sm:px-20 py-0   hover:text-amber-500" onClick={() =>{
              const element4 = document.getElementById('Contact');
                element4?.scrollIntoView({
                block: 'center',
                behavior:'smooth'
              })
            }}>Contact</button>
        </div>
      </nav>
  )
}

export default Nav