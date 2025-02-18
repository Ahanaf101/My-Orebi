import React from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className='py-[100px] bg-[#F5F5F3]'>
    <Container>
      <div className="flex justify-between">
        <div className="w-[15%]">
          <p className='font-dm font-bold text-[#262626] text-[16px] pb-[15px]'>MENU</p>
          <ul>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Home</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Shop</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>About</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Contact</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Journal</li>
          </ul>
        </div>

        <div className="w-[15%]">
        <p className='font-dm font-bold text-[#262626] text-[16px] pb-[15px]'>SHOP</p>
          <ul>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Category 1</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Category 2</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Category 3</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Category 4</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Category 5</li>
          </ul>
        </div>

        <div className="w-[15%]">
        <p className='font-dm font-bold text-[#262626] text-[16px] pb-[15px]'>HELP</p>
          <ul>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Privacy Policy</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Terms & Conditions</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Special E-shop</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Shipping</li>
            <li className='font-dm font-normal text-[14px] text-[#6D6D6D] py-[4px]'>Secure Payments</li>
          </ul>
        </div>

        <div className="w-[25%]">
          <p className="font-dm font-bold text-[#262626] text-[16px]">(052) 611-5711</p>
          <p className="font-dm font-bold text-[#262626] text-[16px]">company@domain.com</p>
        </div>

        <div className="w-[30%] relative">
          <img src={logo} alt="" />
          <div className="absolute bottom-0 left-0 font-dm font-normal text-[#6D6D6D] text-[14px]">
            <p className=''>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </div>
      </div>
    </Container>
  </footer>
  )
}

export default Footer