import React from 'react'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import PrevArrow from '../PrevArrow';
import NextArrow from '../NextArrow';

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
      };

  return (
   <>
 
  <Slider {...settings}>
      <div>
        <Link to='https://www.creativeitinstitute.com/' target="_blank">
        <div className="bg-[url('/Banner.png')] bg-cover bg-center bg-no-repeat py-[280px]"></div>
        </Link>
      </div>
      <div>
        <Link to='https://www.creativeitinstitute.com/' target="_blank">
        <div className="bg-[url('/Banner.png')] bg-cover bg-center bg-no-repeat py-[280px]"></div>
        </Link>
      </div>
      <div>
        <Link to='https://www.creativeitinstitute.com/' target="_blank">
        <div className="bg-[url('/Banner.png')] bg-cover bg-center bg-no-repeat py-[280px]"></div>
        </Link>
      </div>
      
    </Slider>
  
 
   </>
  )
}

export default Banner