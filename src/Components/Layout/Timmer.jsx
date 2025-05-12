import React from 'react'
import { motion } from "framer-motion";
const Timmer = ({src,alt}) => {
    
  return (
    <>
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, y: -100 }}  
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ width: "100%", height: "auto", borderRadius: "10px" }}
    />
    </>
  )
}

export default Timmer