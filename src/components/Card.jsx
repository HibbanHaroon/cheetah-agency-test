import { useState } from "react";
import Textfield from "./Textfield";
import DollarIcon from "../assets/icons/DollarIcon";
import PeopleIcon from "../assets/icons/PeopleIcon";

function Card() {
  return (
    <div className="m-7 p-7 bg-white drop-shadow-md rounded-xl">
      <div className="flex-col flex justify-start">
        <Textfield
          label="Bill"
          icon={<DollarIcon></DollarIcon>}
          placeholder="0.00"
        />
        <Textfield
          label="Number of People"
          icon={<PeopleIcon></PeopleIcon>}
          placeholder="0"
        />
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Card;
