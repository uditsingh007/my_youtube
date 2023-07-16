import React, { useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { toggleSidedrawer } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Head = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-5 shadow-lg">
      <div className="flex items-center gap-3">
        <Bars3Icon
          onClick={() => dispatch(toggleSidedrawer())}
          className="h-8 cursor-pointer"
        />
        <Link to="/">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex items-center flex-shrink flex-grow-0 basis-[40rem] flex-row min-w-0">
        <input
          className="border border-gray-400 rounded-l-full p-2 flex-1"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          <MagnifyingGlassIcon className="h-6" />
        </button>
      </div>
      <div className="flex">
        <VideoCameraIcon className="h-8" />
        <BellIcon className="h-8" />
        <UserCircleIcon className="h-8" />
      </div>
    </div>
  );
};

export default Head;
