import { useState } from "react";
import Textfield from "./Textfield";
import DollarIcon from "../assets/icons/DollarIcon";
import PeopleIcon from "../assets/icons/PeopleIcon";
import TipGrid from "./TipGrid";
import BillCard from "./BillCard";

function Card() {
  return (
    <div className="flex flex-row m-7 p-7 bg-white drop-shadow-md rounded-xl">
      <div className="flex flex-col justify-start">
        <Textfield
          label="Bill"
          icon={<DollarIcon></DollarIcon>}
          placeholder="0.00"
        />
        <TipGrid></TipGrid>
        <Textfield
          label="Number of People"
          icon={<PeopleIcon></PeopleIcon>}
          placeholder="0"
        />
      </div>
      <BillCard></BillCard>
    </div>
  );
}

export default Card;
