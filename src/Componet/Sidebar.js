import React from "react";
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { BiFilm } from "react-icons/bi";
import { MdHistory, MdOutlinePlaylistPlay, MdVideoLibrary, MdWatchLater, MdDownload } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaMusic, FaGamepad, FaNewspaper, FaTrophy, FaShoppingBag } from "react-icons/fa";
import { RiMovie2Fill, RiLiveFill } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  return !isMenuOpen  ? null:(
   <>
   {isMenuOpen && ( <div className="w-5/12 h-screen overflow-y-auto border-r border-gray-300 p-4 sticky top-0 bg-white">
      {/* Home Section */}
      <div>
        <ul>
          <Link to="/" className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <IoHome size={20} /> Home
          </Link>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <SiYoutubeshorts size={20} /> Shorts
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <BiFilm size={20} /> Subscriptions
          </li>
        </ul>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* You Section */}
      <div>
        <h1 className="font-bold text-lg mb-2">You</h1>
        <ul>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdHistory size={20} /> History
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdOutlinePlaylistPlay size={20} /> Playlists
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdVideoLibrary size={20} /> Your Videos
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdWatchLater size={20} /> Watch Later
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <AiFillLike size={20} /> Liked Videos
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdDownload size={20} /> Downloads
          </li>
        </ul>
      </div>

    
      <hr className="my-4" />

    
      <div>
        <h1 className="font-bold text-lg mb-2">Explore</h1>
        <ul>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaShoppingBag size={20} /> Shopping
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaMusic size={20} /> Music
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <RiMovie2Fill size={20} /> Movies
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <RiLiveFill size={20} /> Live
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaGamepad size={20} /> Gaming
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaNewspaper size={20} /> News
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaTrophy size={20} /> Sports
          </li>
          <li className="flex items-center gap-3 font-semibold py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdCastForEducation size={20} /> Courses
          </li>
        </ul>
      </div>
    </div>)}
   
   </>
  );
};

export default Sidebar;
