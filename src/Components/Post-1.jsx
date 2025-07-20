import React from "react";
import girl from "../assets/girl-profile.png";
import girlImagePost from "../assets/alexander.png";
import redheart from "../assets/redheart-icon.png";
import messege from "../assets/messege-icon.png";
import { CiShare2 } from "react-icons/ci";

const PostOne = () => {
  return (
    <>
      <div className="w-[100vw] bg-[#e5e5e57d] flex items-center justify-center py-6">
        <div className="w-[80vw] bg-white shadow-sm">

          {/* Profile + Gradient Border */}
          <div className="flex items-center mx-3.5 py-1.5">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E20337] via-[#C60188] to-[#7700C3] p-[2px]">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <img
                    src={girl}
                    alt="profile"
                    className="rounded-full w-full h-full object-cover m-2"
                  />
                </div>
              </div>
            </div>
            <p className="font-medium mx-4">Leslie Alexander</p>
          </div>

          {/* Post Image */}
          <img src={girlImagePost} alt="post" className="w-full" />

          {/* Action Buttons */}
          <div className="flex px-2.5 py-2.5 items-center">
            <img src={redheart} alt="like" className="mx-2.5 w-6 h-6" />
            <img src={messege} alt="comment" className="mx-2.5 w-6 h-6" />
            <CiShare2 className="mr-1 text-2xl" />
          </div>

          {/* Post Content */}
          <div className="pl-4 py-3 text-sm">
            <p className="font-semibold">1,80,123 Likes</p>
            <p>Beautiful sunrise with rock greenery enjoying the view.</p>
            <p>
              <strong>Bessie Cooper</strong> Wow I hope I will be there
            </p>
            <p>
              <strong>Esther Howard</strong> my favourite spot
            </p>
            <p className="text-gray-400">September-29</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default PostOne;
