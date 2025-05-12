import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Ad1 from '../../assets/Ad1.png'
import Ad2 from '../../assets/Ad2.png'
import Ad3 from '../../assets/Ad3.png'
import { Link } from 'react-router-dom'

const Selse = () => {
  return (
    <>
   <div className="py-[130px]">
   <Container>
        <Flex className={"justify-between gap-x-4"}>
           
           <div className="w-1/2">
           <Link to="/">
           <Image imgSrc={Ad1} className={"w-full"}/>
           </Link>
            </div>
        
            <div className="w-1/2">
               <div className="">
               <Link to="/">
               <Image imgSrc={Ad2} className={"w-full"}/>
               </Link>
               </div>
               <div className="mt-8">
               <Link to={'/'}><Image imgSrc={Ad3} className={"w-full"}/></Link>
               </div>
            </div>
        </Flex>
    </Container>
   </div>
    </>
  )
}

export default Selse