import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from "../Product";
import Container from "../Container";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from "../PrevArrow";
import NextArrow from "../NextArrow";

const NewArraival = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
 let [allData,setAllData] = useState([]);
 
    useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setAllData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
    return (
    <>
      <Container>
         <div className="">
         <Slider {...settings}>
         {allData.map((item) => (
            <div key={item.id}>
              <Link to={`/product/${item.id}`} target="_blank">
                <div className="ml-4">
                  <Product productImg={item.thumbnail} badge="New" />
                </div>
              </Link>
            </div>
          ))}
    </Slider>
   
         </div>
        </Container> 
    </>
  );
};

export default NewArraival;
