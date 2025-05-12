import React from 'react'
import Container from './Container'
import Image from './Image'
import Product1 from '../assets/Product1.png'
import Bedge from './Bedge'
import { FaHeart } from "react-icons/fa";
const Product = ({badge,productImg}) => {
  return (
    <>
   <div className="relative py-6 flex gap-x-6">
   <div className="group">
   <div className=" ">
        <Image imgSrc={productImg} className="w-full"/>
        <Bedge className={"absolute top-15 left-3 text-white"} badgeText={badge}/>
    </div>
   <div className="group-hover:bg-amber-300 bottom-10 right-0 absolute w-full p-7 ">
   <div className="flex justify-end ">
        <h2 className=''>Add to Wish List</h2>
        <FaHeart className='ml-4'/>
    </div>
   <div className="flex justify-end  ">
        <h2>Add to Wish List</h2>
        <FaHeart className='ml-4'/>
    </div>
   <div className="flex justify-end  ">
        <h2>Add to Wish List</h2>
        <FaHeart className='ml-4'/>
    </div>
   </div>
   </div>
   </div>
    </>
  )
}

export default Product