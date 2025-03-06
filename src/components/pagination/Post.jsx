import React, { useContext } from 'react'
import { FaCartPlus, FaHeart, FaThList } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ApiData } from '../ContextApi';
const Post = () => {
    let data = useContext(ApiData);
    console.log(data);
    
  return (
    <div className="w-[83%] p-[10px]">
      <div className="heading  flex items-center p-[10px]">
        <div className="icon w-1/2 flex gap-3">
          <div className="p-[16px] hover:bg-[#000] hover:text-[#fff] duration-[1s]">
            <IoGridSharp />
          </div>
          <div className="p-[16px] hover:bg-[#000] hover:text-[#fff] duration-[1s]">
            <FaThList />
          </div>
        </div>
        <div className="search w-1/2 flex justify-between">
          <div className="opt w-[48%] flex justify-end gap-3">
            <label htmlFor="cate" className='mt-3'>Sort By</label>
            <select name="cate" id="cate" className="w-[70%] border border-gray-500 rounded py-[15px] bg-white ">
              <option value="value1" className="text-right">
                Sort 1
              </option>
              <option value="value2" className="text-right">
                Sort 2
              </option>
              <option value="value3" className="text-right">
                Sort 3
              </option>
              <option value="value4" className="text-right">
                Sort 4
              </option>
              <option value="value5" className="text-right">
                Sort 5
              </option>
            </select>
          </div>
          <div className="opt w-[48%] flex justify-end gap-3">
            <label htmlFor="cateTwo" className='mt-3'>Show</label>
            <select name="cateTwo" id="cateTwo" className="w-[70%] border border-gray-500 rounded  bg-white">
              <option value="10" className="text-right">
                10
              </option>
              <option value="20" className="text-right">
                20
              </option>
              <option value="30" className="text-right">
                30
              </option>
              <option value="40" className="text-right">
                40
              </option><option value="50" className="text-right">
                50
              </option>
            </select>
          </div>
        </div>
      </div>
       <div className="flex flex-wrap justify-between">
      {data.map((item)=>(
       
           
              <div className="w-[32%] bg-[#f2f2f2]  my-[10px]">
                <div className="thumb relative group">
                  <Link to={`${item.id}`} >
                    <img
                      src={item.thumbnail} alt="" className="w-full h-[280px]"/>
                  </Link>
                  <div className="w-[80px] mt-2 ml-2 text-center absolute top-0 left-0 py-[5px] bg-[#000] text-[#fff]">
                    <p className=''>{item.discountPercentage}%</p>
                  </div>
                  <div className="w-full absolute bottom-0 left-0 duration-300 ease-in-out opacity-0 group-hover:opacity-100 h-0 group-hover:h-[150px] bg-white">
                    <ul className='mr-3'>
                      <li className="flex justify-end items-center gap-2 py-[10px]">
                        <p>Add to Wish List</p>
                        <FaHeart />
                      </li>
                      <li className="flex justify-end items-center gap-2 py-[10px]">
                        <p>Compare</p>
                        <FaCodeCompare />
                      </li>
                      <li className="flex justify-end items-center gap-2 py-[10px]">
                        <p>Add to Cart</p>
                        <FaCartPlus />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex  justify-between items-center">
                  <p className="font-bold ml-2 pb-2 text-[16px]">{item.title}</p>
                  <p className='mr-2 pb-2'>${item.price}</p>
                </div>
              </div>
            
         
         
      ))}  
           </div>
    </div>
  );
};

export default Post