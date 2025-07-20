import React from 'react'
import girl from "../assets/girl-profile.png";
import nature from "../assets/nature.png"
import like from "../assets/Like.png"
import messege from "../assets/messege-icon.png"
import { CiShare2 } from "react-icons/ci";


const PostTwo = () => {
  return (
<>
    <>
      <div className="w-[100vw] bg-[#e5e5e57d]  flex items-center justify-center py-6">
        <div className="w-[80vw] bg-white shadow-sm  ">

          <div className="flex mx-3.5 py-4">
                <img src={girl} />
                <p className="font-medium mx-4 ">Cody Fisher</p>
          </div>
          <img src={nature} className="w-full"/>
          <div className="flex px-2.5 py-2.5 items-center ">
             <img src={like} className="mx-2.5"/>
             <img src={messege}  className="mx-2.5"/>
              <CiShare2 className="mr-1 text-2xl" />


          </div>
          <div className="pl-4 py-3">
            <p>1,80,123 Likes</p>
        <p>Enjoying the nature with the beautiful sunrise</p>
        <p>Bessie Cooper so nice we are bringing our memories back</p>
        <p><strong>Esther Howard </strong> my favourite spot</p>
        <p className="text-gray-400">1 Hour Ago</p>
        </div>
        </div>
      </div>
    </></>
  )
}

export default PostTwo
