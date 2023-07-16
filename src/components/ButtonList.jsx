import React from "react";
import { buttonList } from "../constants";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex gap-2 p-3">
      {buttonList.map((i) => (
        <Button key={i} text={i} />
      ))}
    </div>
  );
};

export default ButtonList;
