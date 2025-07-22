import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";


export default function Profiles() {
  const [array, setArray] = useState([]);
  const [names, setNames] = useState([]);
    
 useEffect(() => {
  const fetchStories = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log("Stored token:", token);

      const response = await fetch("https://apis.ccbp.in/insta-share/stories", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
     
      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      console.log("Fetched data:", data);

      const urls = data.users_stories.map((story) => story.story_url);
      const userNames = data.users_stories.map((story) => story.user_name);

      setArray(urls);
      setNames(userNames);
    } catch (err) {
      console.error("Failed to fetch stories Error:", err);
    }
  };

  fetchStories();
}, []);



  var settings = {
    dots: false,
    infinite: true,
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
   <div className="container !w-[100vw]  ">
      <div className="!w-[80vw] mx-auto">
        <Slider {...settings}>
          {array.map((img, index) => (
            <div key={index} className="px-1 text-center">
              <img
                src={img}
                alt={names[index]}
                className="rounded-full w-16 h-16 object-cover mx-auto mt-2.5"
              />
              <p className="text-sm mt-2 mb-2.5 font-bold text-gray-800 tracking-wide">
                {names[index]}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

}
