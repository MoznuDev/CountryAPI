import React from "react";
import Container from "../Container";
import Flex from "./../Flex";
import { FaTruck,FaUndo } from "react-icons/fa";
import Two from '../../assets/Two.png'
import Image from "../Image";

const Info = () => {
  return (
    <>
     <div className="bg-hoverC py-5">
     <Container>
        <Flex className={"justify-between"}>
            <div className="flex gap-x-2 items-center">
                <Image imgSrc={Two}/>
                <h2>Two years warranty</h2>
         </div>
         <div className="flex gap-x-2 items-center">
            <FaTruck/>
            <h2>Free shipping</h2>
         </div>
         <div className="flex gap-x-2 items-center">
            <FaUndo />
            <h2>Return policy in 30 days</h2>
         </div>
        </Flex>
      </Container>
     </div>
    </>
  );
};

export default Info;
