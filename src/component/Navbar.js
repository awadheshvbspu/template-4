import React,{useState} from 'react';
import logo from '../assests/logo.svg';
import {BiMenu} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {
  const [open,setOpen] = useState(false);

  const collapse = ()=>{
    setOpen(!open)
  }
  return (
    <>
        <div>
            <nav className='relative container mx-auto p-6'>
                {/* flex container */}
                <div className='flex items-center justify-between'>
                    {/* logo */}
                    <div>
                    <img src={logo} alt=''/>
                </div>
                <button
          id="menu-btn"
          class="block hamburger md:hidden focus:outline-none pl-6"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      
              <div class="md:hidden">
              <div
                id="menu"
                class="absolute flex flex-col items-center hidden  self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" 
              >
                <a href="#">Pricing</a>
                <a href="#">Product</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Community</a>
              </div>
            </div>
    
                {/* <div onClick={collapse} className='w-7 h-7 text-blue-700 cursor-pointer absolute right-8 top-6 md:hidden'>
              {open ?<AiOutlineClose size={30}/>  : <BiMenu size={30}/> }
            </div> */}
                {/* menu */}
                <div className={`hidden  space-x-6 ml-auto px-4 md:flex ${open ? "" : 'show'}`}>
                <a href="#" className='hover:text-darkGrayishBlue'>Pricing</a>
                <a href="#" className='hover:text-darkGrayishBlue'>Product</a>
                <a href="#" className='hover:text-darkGrayishBlue'>About Us</a>
                <a href="#" className='hover:text-darkGrayishBlue'>Careers</a>
                <a href="#" className='hover:text-darkGrayishBlue'>Community</a>
                </div>
                {/* button */}
                <a href='' className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Get Started</a>
                </div>
            </nav>
        </div>
    </>
  )
}
