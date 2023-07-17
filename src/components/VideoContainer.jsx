import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);
  const fetchVideos = async () => {
    const res = await fetch(YOUTUBE_API);
    const data = await res.json();
    setVideos(data.items);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-3">
      {videos.map((i) => (
        <Link key={i.id} to={`/watch?v=${i.id}`}>
          <VideoCard data={i} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
