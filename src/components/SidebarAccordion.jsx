import React, { useState } from "react";
import { MAX_LIST_ITEMS_TO_SHOW } from "../constants";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

const SidebarAccordion = ({ geners }) => {
  const [show, setShow] = useState(false);
  const listComp = ({ title, icon }) => (
    <li
      onClick={() => handleClick(title)}
      key={title}
      className="flex gap-2 items-center cursor-pointer p-2 hover:bg-slate-400 rounded-lg transition"
    >
      {icon}
      {title}
    </li>
  );
  const handleClick = (title) => {
    if (title === "Show More" || title === "Show Less") {
      setShow(!show);
    }
  };
  const finalArr = () => {
    if (geners.length <= MAX_LIST_ITEMS_TO_SHOW) {
      return geners;
    } else {
      if (show) {
        return [
          ...geners,
          {
            title: "Show Less",
            icon: <ArrowUpIcon className="sidebar-icons" />,
          },
        ];
      } else {
        return [
          ...geners.slice(0, MAX_LIST_ITEMS_TO_SHOW),
          {
            title: "Show More",
            icon: <ArrowDownIcon className="sidebar-icons" />,
          },
        ];
      }
    }
  };
  return (
    <ul className="flex flex-col px-2 py-5 border-b-2">
      {finalArr().map(listComp)}
    </ul>
  );
};

export default SidebarAccordion;
