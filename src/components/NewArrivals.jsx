import Container from './Container'
import React, { useEffect, useState } from 'react'
import Topone from '../assets/topone.png'
import { FaHeart } from "react-icons/fa";
import { HiMiniArrowPath } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  position:"absolute",right:"0",top:"150px",height:"40px",width:"40px",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"50px",background:"#d8d8d8",color:"white",cursor:"pointer"}}
        onClick={onClick}
      ><FaArrowRight/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,position:"absolute",left:"0",top:"170px",height:"40px",width:"40px",borderRadius:"50px",background:"#d8d8d8",color:"white",zIndex:"5",cursor:"pointer", alignItems:"center",display:"flex",justifyContent:"center"}}
        onClick={onClick}
      ><FaArrowLeft/></div>
    );
  }
const NewArrivals = () => {
    var newSlider = {
       
        infinite: true,
        
        autoplay:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>
        
        }
    let [data,setData] = useState([])
    let getData = ()=>{
        axios.get("https://dummyjson.com/products").then((response)=>{
            setData(response.data.products);
            
        })
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data);
    
  return (
    <section className='pt-[128px]'>
        <Container>
            <h2 className='text-[39px] font-dm font-bold text-[#262626] pb-4'>New Arrivals</h2>
            
           
                 <Slider {...newSlider}>
                   {data.map((item)=>(
                <div className="!w-[90%]">
                    <div className="relative group overflow-y-hidden">
                        <img className='w-full' src={item.thumbnail} alt="" />

                        <div className="w-full absolute bottom-0 left-0 duration-300 ease-in-out opacity-0 group-hover:opacity-100 h-0 group-hover:h-[150px] bg-white">
                            <ul className='flex items-center h-full justify-end'>
                                <div className=" ">
                                     <li className='flex text-center gap-x-4 justify-end py-1 cursor-pointer'>Add to Wish List <FaHeart className='mr-2 cursor-pointer hover:text-red-600'/></li>
                                <li className='flex text-center gap-x-4 py-1 justify-end cursor-pointer'>Replacement <HiMiniArrowPath className='ml-5 cursor-pointer mr-2 hover:text-red-600' /></li>
                                <li className='flex text-center gap-x-4 py-1 justify-end cursor-pointer'>Add to Cart<FaCartShopping className='cursor-pointer ml-8 mr-2 hover:text-red-600' /></li>
                                </div>
                               
                            </ul>
                        </div>
                       
                    </div>
                        <div className="flex pt-[24px] justify-between items-center">
                             <h3 className='text-[16px] font-dm font-bold text-[#262626]'>{item.title}</h3>
                             <p className='text-[16px] font-dm font-normal text-[#767676]'>${item.price}</p>
                        </div> 
                        <h4 className='text-[16px] font-dm font-normal text-[#767676 ]'>Black</h4>
                </div>
                ))}  
                </Slider>
               
           
               
              
            
        </Container>
    </section>
  )
}

export default NewArrivals