import Container from './Container'
import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import Shop from '../pages/Shop'
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Header = () => {
  let [show,setShow] = useState(false)
  return (
   <section className='py-[30px]'>
    <Container>
      <div className=" lg:flex justify-between">
        <div className=""><img src={Logo} alt="" /></div>
        <div className="mr-[500px]">
          <ul className='lg:flex gap-11 items-center'>
             <Link to='/'>
              <li className='font-dm font-normal hover:font-bold text-[16px] duration-300 ease-in-out'>Home</li>
             </Link>
             <Link to='shop'>
              <li className='font-dm duration-300 ease-in-out font-normal hover:font-bold text-[16px]'>Shop</li>
             </Link>
             <Link to='about'>
               <li className='font-dm duration-300 ease-in-out font-normal  hover:font-bold text-[16px]'>About</li>
             </Link>
             <Link to='contact'>
             <li className='font-dm duration-300 ease-in-out font-normal hover:font-bold text-[16px]'>Contacts</li>
             </Link>
             <Link to='journal'>
              <li className='font-dm duration-300 ease-in-out font-normal hover:font-bold text-[16px] '>Journal</li>
             </Link>
          </ul>
        </div>
        <div className="lg:hidden" onClick={()=>setShow(!show)}>
           {show ? <RxCross2/> : <FaBars/>  }
          
          
        </div>
      </div>        
    </Container>
   </section>
  )
}

export default Header