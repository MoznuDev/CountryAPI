import React from 'react'
import Header from './Header'
import Footer from '../Page/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default RootLayout