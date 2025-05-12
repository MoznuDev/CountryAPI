import React from 'react'
import Image from './Image'
import sunglass from "../assets/norasSunglass.png"
import { FaStar } from "react-icons/fa";
import Container from './Container';
import Flex from './Flex';

const ProductDetails = () => {
  return (
  <>
    <div className="">
        <Container>
            <Flex className={"justify-between gap-x-4 "}>
                <div className="w-1/2">
                    <Image imgSrc={sunglass} className={'w-full'}/>
                </div>
                <div className="w-1/2">
                    <Image imgSrc={sunglass} className={'w-full'}/>
                </div>
            </Flex>
            <Flex className={"justify-between gap-x-4 mt-4"}>
                <div className="w-1/2">
                    <Image imgSrc={sunglass} className={'w-full'}/>
                </div>
                <div className="w-1/2">
                    <Image imgSrc={sunglass} className={'w-full'}/>
                </div>
            </Flex>
            <div className="">
                <h1>Product</h1>
                <Flex className={'items-center gap-x-4'}>
                <div className="flex">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                </div>
                <h3>1 Review</h3>
                </Flex>
                <h3><del>75.00$</del> 44.0$</h3>
                <div className="">
                    <h3>Color: <input type="color" /></h3>
                </div>

            </div>
        </Container>
    </div>
  </>
  )
}

export default ProductDetails