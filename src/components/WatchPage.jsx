import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideDrawer, openSideDrawer } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_SINGLE_VIDEO } from "../constants";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState();
  console.log(video);
  useEffect(() => {
    fetchSingleVideo();
    dispatch(closeSideDrawer());
    return () => dispatch(openSideDrawer());
  }, []);
  const fetchSingleVideo = async () => {
    const res = await fetch(
      `${YOUTUBE_API_SINGLE_VIDEO}&id=${searchParams.get("v")}&key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }`
    );
    const data = await res.json();
    setVideo(data?.items[0]);
  };
  return (
    <div>
      <div>
        <iframe
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
