import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoConatiner = () => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    getVideoApi();
  }, []);

  const getVideoApi = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //console.log(json);
    setVideo(json.items);
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoConatiner;
