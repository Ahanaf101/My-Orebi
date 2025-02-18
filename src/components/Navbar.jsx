import Container from './Container'
import React, { useEffect, useRef, useState } from 'react'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
   let [categoryShow,setCategoryShow] = useState(false)
   let [accShow,setAccShow] = useState(false)
   let [cartShow,setCartShow] = useState(false)
   let cateRef = useRef()
   let accRef = useRef()
   let cartRef = useRef()

  useEffect(()=>{
    document.addEventListener("click",(e)=>{
        if(cateRef.current.contains(e.target)){
            setCategoryShow(!categoryShow)
        }else{
            setCategoryShow(false)
        }
        if(accRef.current.contains(e.target)){
            setAccShow(!accShow)
        }else{
            setAccShow(false)
        }
        if(cartRef.current.contains(e.target)){
            setCartShow(!cartShow)
        }else{
            setCartShow(false)
        }
    })
  },[categoryShow,accShow,cartShow])
  return (
    <section className='bg-[#F5F5F3] py-[25px]'>
        <Container>
            <Flex className="justify-between items-center">
                <div className="w-[30%] relative">
                    <div  className="flex items-center  gap-x-3 cursor-pointer " ref={cateRef}>
                        <FaBarsStaggered/>
                        <h3 className="">Shop by Category</h3>
                    </div>
            {categoryShow &&   
              <div className="bg-[#262626] absolute top-[63px] left-0 z-50 py-6 w-[300px]">  
                        <ul className=''>
                            <li className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointe border-b-[1px] border-[#262626] hover:border-white'>Accesories</li>
                            <li  className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[#262626] hover:border-white'>Furniture</li>
                            <li  className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[#262626] hover:border-white'>Electronics</li>
                            <li  className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[#262626] hover:border-white'>Clothes</li>
                            <li  className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointer border-b-[1px] border-[#262626] hover:border-white'>Bags</li>
                        </ul>
                    </div>
            }
                  
            
                </div>
                <div className="w-[40%]">
                    <div className="relative">
                         <input type="search" placeholder='search' className='w-full pl-4 rounded-lg h-[50px] border-2 ' />
                         <div className="absolute top-[50%] translate-y-[-50%] right-[20px]">
                            <FaSearch/>
                         </div>
                    </div>
                   
                </div>
                <div className="w-[30%] relative">
                    <div className="flex justify-end gap-x-6 items-center">
                        <div className="flex cursor-pointer" ref={accRef}>
                            <FaUser/>
                            < IoMdArrowDropdown/>

                        </div>
                        <div className="cursor-pointer" ref={cartRef}>
                             <FaCartShopping/>
                        </div>
                       
                    </div>
                {cartShow && 

                        <div className=" ">
                         <div className="flex z-50 bg-[#F5F5F3] border-[1px] border-black w-[400px] absolute top-[25px] left-[65px]">
                        <div className="flex py-2 ">
                            <div className="px-[50px] py-[40px] ml-2 bg-gray-300"></div>
                           
                        </div>
                        <div className="">
                             <p className='text-black pt-2 pl-4'>Black Smart Watch</p>
                            <p className='text-black py-2 pl-4'>$44.00</p>
                        </div>
                        
                    </div>
                    <div className="s absolute top-[123px] bg-white w-[400px] z-50 left-[65px] border-[1px] border-black">
                        <p className='ml-[10px] pl-2 pt-3'>Subtotal <span className='font-bold'> :Subtotal: $44.00</span></p>
                        <div className="flex pt-[50px] pb-[30px] ml-[9px]"  >
                             <div className="cart pl-[10px]  ">
                            <a href="#" className='py-[25px] duration-300 ease-in-out px-[50px] bg-black text-white hover:text-black hover:bg-gray-500  text-center mr-6'>View Cart</a>
                             <a href="#" className='py-[25px] duration-300 ease-in-out px-[50px] bg-black text-white hover:text-black hover:bg-gray-500  text-center'>Checkout</a>
                           

                            
                        </div>
                       
                            
                        </div>
                    </div>
                        </div>
                }
                   
                   
                    {accShow && 
                    
                    <div className="absolute top-0 z-50 left-0">
                        <ul className="bg-[#262626] absolute top-[20px] left-[220px] py-6 w-[200px]">
                            <li  className='text-[rgb(255,255,255,70%)] py-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointe border-b-[1px] border-[#262626] hover:border-white'>My Account</li>
                            <li  className='text-[rgb(255,255,255,70%)] p-2 pl-3 hover:pl-8 duration-300 ease-in-out hover:text-white cursor-pointe border-b-[1px] border-[#262626] hover:border-white'>Logout</li>
                        </ul>
                    </div>
                    }
                    
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navbar