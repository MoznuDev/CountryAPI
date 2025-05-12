import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={"text-5xl text-red-400 top-1/2 right-7 -translate-y-1/2  absolute"}onClick={onClick}><IoIosArrowDropright/></div>
    );
}

export default NextArrow