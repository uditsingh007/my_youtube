import React from "react";
import SidebarAccordion from "./SidebarAccordion";
import { listOne, listTwo } from "../constants";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const show = useSelector((state) => state.app.isSidedrawerOpen);
  if (!show) return;
  return (
    <div className="p-5 shadow-lg basis-1/6">
      <SidebarAccordion geners={listOne} />
      <SidebarAccordion geners={listTwo} />
    </div>
  );
};

export default Sidebar;
