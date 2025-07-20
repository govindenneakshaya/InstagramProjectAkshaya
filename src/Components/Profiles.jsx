import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
// import React from "react";
// import left from "../assets/left-arrow.png";

// import right from "../assets/right-arrow.png";
import one from "../assets/round-1.png";

import two from "../assets/round-2.png";

import three from "../assets/round-3.png";

import four from "../assets/round-4.png";

import five from "../assets/round-5.png";

import six from "../assets/round-6.png";

import seven from "../assets/round-7.png";
const array = [one, two, three, four, five, six, seven];
const names=["Akki","Sindhu","Santa","Likki","Charish","Hattori","Pinaki"]

export default function Profiles() {
 var settings = {
  dots: false,
  infinite:true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024, // under 1024px screen
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768, // under 768px screen
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // under 480px
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    
    <div className="container !w-[100vw] ">
      <div className="!w-[80vw] mx-auto">
      <Slider {...settings}>
        {array.map((img, index) => (
          <div key={index} className="px-1 text-center">
            <img
              src={img}
              alt={names[index]}
              className="rounded-full w-16 h-16 object-cover mx-auto mt-2.5"
            />
            <p className="text-sm mt-2 mb-2.5 font-bold text-gray-800 tracking-wide">{names[index]}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}
