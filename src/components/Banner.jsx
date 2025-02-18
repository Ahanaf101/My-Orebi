import React from 'react'
import Ban from '../assets/banner.png'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import Container from './Container';
import Flex from './Flex';
import { FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows:false,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
               
                borderRadius: "10px",
                padding: "10px",
                position:"absolute",
                left:"10%",
                top:"50%",
                transform:"translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "25px",
                color: "transparent",
                padding:"10px 0",
                borderRight: " 4px white solid "
              }}
            >
              {i + 1}
            </div>
          )
      };
  return (
    <section className='relative'>
        <Slider {...settings}>

       
        <div className="">
            <a href="#">
                <img src={Ban} className='w-full' alt="" />
            </a>       
        </div>
        <div className="">
            <a href="#">
                <img src={Ban} className='w-full' alt="" />
            </a>       
        </div>
        <div className="">
            <a href="#">
                <img src={Ban} className='w-full' alt="" />
            </a>       
        </div>
        <div className="">
            <a href="#">
                <img src={Ban} className='w-full' alt="" />
            </a>       
        </div> 
        </Slider>
        <div className="">
            <Container>
                <Flex className='justify-between'>
                    <div className="flex ">
                        <p className='lg:text-[20px] mt-1 font-bold pr-1'>2</p>
                        <p className='text-[#6D6D6D] lg:mt-[6px]'>Two years warranty</p>
                    </div>
                    <div className=" flex">
                        <FaTruck className='mt-3 '/>
                        <p className='text-[#6D6D6D] ml-2 lg:mt-[6px]'>Free Shiping</p>

                    </div>
                    <div className="flex">
                        <GiReturnArrow className='mt-3'/>
                        <p className='text-[#6D6D6D] ml-2 lg:mt-[6px]'>Return policy in 30 days</p>
                    </div>
                </Flex>
            </Container>
        </div>
    </section>
    
  )
}

export default Banner