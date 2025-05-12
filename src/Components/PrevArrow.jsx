import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className={"text-5xl text-red-400 absolute top-1/2 left-7 -translate-y-1/2 z-10"}onClick={onClick}>
       <IoIosArrowDropleft/>
      </div>
    );
}

export default PrevArrow