import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  BellIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { toggleSidedrawer } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_SUGGESTON_API } from "../constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((state) => state.search.cache);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[search]) {
        setSuggestions(cache[search]);
      } else {
        fetchSuggestion();
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [search]);
  const fetchSuggestion = async () => {
    const res = await fetch(`${YOUTUBE_SEARCH_SUGGESTON_API}${search}`);
    const [, data] = await res.json();
    setSuggestions(data);
    dispatch(
      cacheResults({
        [search]: data,
      })
    );
  };
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
        <div className="relative flex-1">
          <div className="flex relative">
            <input
              className="border border-gray-400 rounded-l-full p-2 w-full"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            {suggestions.length > 0 && (
              <XMarkIcon
                onClick={() => {
                  setSuggestions([]);
                  setSearch("");
                }}
                className="h-8 absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer"
              />
            )}
          </div>
          {suggestions.length > 0 && showSuggestions && (
            <div className="absolute top-12 bg-white py-2 px-5 w-full rounded-lg shadow-md border border-gray-200">
              <ul>
                {suggestions.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
