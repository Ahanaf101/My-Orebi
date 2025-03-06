import axios from 'axios';
import Container from '../components/Container';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { IoMdStarHalf } from 'react-icons/io';
import { IoMdStar } from 'react-icons/io';
import { IoMdStarOutline } from 'react-icons/io';

const ProductDetails = () => {
    let navigate = useNavigate();

    let [polu,setPolu] = useState(false)
    let productId = useParams();
    
    let [singleProduct,setSingleProduct] = useState({});

    let singleData = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setSingleProduct(response.data)
           
            
        });
    };
    useEffect(()=>{
        singleData();
    },[]);
    let clientRating = Array.from({length:5},(_,index)=>{
        let number = index + 0.5
        return singleProduct.rating > index + 1 ? <IoMdStar/> : singleProduct.rating >number ? <IoMdStarHalf/> : <IoMdStarOutline/>
    })


    let handleCart = ()=>{
      toast('Added to Cart!')
      setTimeout(() => {
        navigate('/cart')
      }, [2500])
    }

  return (
    <div className="">
        <Container>
    

<nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <Link to='/' class="inline-flex items-center text-[20px] font-medium text-black hover:text-blue-600 dark:text-black dark:hover:text-red-600">
       
        Home
      </Link>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-black mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <Link to='/shop' class="ms-1 text-[20px] font-medium text-black hover:text-blue-600 md:ms-2 dark:text-black dark:hover:text-red-600">Projects</Link>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
       
        
      </div>
    </li>
  </ol>
</nav>
<div className="flex justify-center py-[60px]">
    <div className="mx-auto w-[20%]">
        {singleProduct?.images?.map((item)=>(
              <div className="w-full">
           <img src={item} alt="" />  
        </div>
       
        ))}
           
       
    </div>
    <div className="w-[50%] mt-5">
        <h2>Product</h2>
        <div className="flex">
            <div className="flex text-center mt-1">
        {clientRating}
        {/* <IoMdStarHalf/> */}
       
        </div>
        <span className='ml-1 text-gray-500'>1 Reviews </span>
        </div>
        
        <div className="mt-5">
          <a href="" className='py-5 mr-3 px-10  bg-[#262626] text-white inline-block'>Add To Wishlist</a>
          <a onClick={handleCart}  className='py-5 px-10 cursor-pointer   bg-[#262626] text-white inline-block'>Add To Cart</a>
          
        </div>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>

    </div>
   
   
   
</div>
    </Container>
    </div>
    
  )
} 

export default ProductDetails