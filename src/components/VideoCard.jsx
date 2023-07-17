import React from "react";
import { textEllipsis } from "../utils/helper";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data || {};
  const { title, channelTitle, thumbnails } = snippet || {};
  return (
    <div className="max-w-[380px]">
      <img
        src={thumbnails?.high?.url}
        className="rounded-2xl md:min-w-[320px] lg:min-w-[380px] max-h-[234px]"
      />
      <div className="flex mt-2 gap-4">
        <div className="flex-shrink-0">
          <img
            src={thumbnails?.high?.url}
            className="rounded-[100%] w-10 h-10"
          />
        </div>
        <div>
          <h3 className="font-normal text-[16px] font-filsonMedium leading-[1.2rem]">
            {textEllipsis(title)}
          </h3>
          <p className="text-sm">{channelTitle}</p>
          <p className="text-sm">{statistics?.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
