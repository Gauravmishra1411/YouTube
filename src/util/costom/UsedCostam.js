 import { useState, useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VEDIO_API } from "../Contact";

export const useCustom = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    try {
      const response = await axios.get(YOUTUBE_VEDIO_API);
      setVideos(response.data?.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }

  return videos; // custom hook should return state, not JSX
};
