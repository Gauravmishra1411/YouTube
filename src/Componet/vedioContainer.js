 import React, { useEffect, useState } from "react";
import { YOUTUBE_VEDIO_API } from "../util/Contact";
import Shimer from "./Shimer";
import { AiFillLike } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import axios from "axios"; 
import { useDispatch } from "react-redux"; 

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
    const dispatch=useDispatch()
    dispatch(videos)
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const data = await axios(YOUTUBE_VEDIO_API);
    // const json = await data.json();
    setVideos(data?.items || []);
  }

  if (videos.length === 0) {
    return <Shimer />;
  }

  return (
    <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ml-6">
      {videos.map((video) => {
        const {
          id,
          snippet: {
            title,
            channelTitle,
            publishedAt,
            thumbnails: { standard },
            tags = [],
          },
          statistics: { viewCount, likeCount } = {},
        } = video;

        return (
          <div
            key={id}
            className="bg-white w-50 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
             <Link to={"watch"}  >
            <div className="aspect-video">
              <img
                alt={title}
                src={standard?.url}
                className="w-full h-full object-cover"
              />
            </div>
            </Link> 
            
            
            <div className="p-4">
              <h5 className="text-md font-semibold text-gray-800 line-clamp-2">
                {title}
              </h5>
              <p className="text-sm text-gray-500">{channelTitle}</p>
              <p className="text-xs text-gray-400 mb-2">
                {new Date(publishedAt).toDateString()}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                <span className="flex items-center gap-1 font-medium">
                  <GrFormView size={18} /> {viewCount%100}K
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <AiFillLike size={16} /> {likeCount}
                </span>
              </div>

              {tags.length > 0 && (
                <p className="text-xs text-gray-600 truncate">
                  Tags: {tags.slice(0, 4).join(", ")}
                </p>
              )}
            </div>
          </div>
        );
      })}
       
    </div>
  );
};

export default VideoContainer;
