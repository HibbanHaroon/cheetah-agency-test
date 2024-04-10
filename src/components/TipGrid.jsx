import React from "react";
import TipButton from "./TipButton";
import Textfield from "./Textfield";

function TipGrid() {
  return (
    <div className="mt-1">
      <label className="mt-2 flex justify-start text-sm font-medium leading-6 text-gray">
        Select Tip %
      </label>
      <div className="mt-1 grid gap-y-1.5 gap-x-3 grid-cols-3 grid-rows-2">
        <TipButton tipPercent={"5%"}></TipButton>
        <TipButton tipPercent={"10%"}></TipButton>
        <TipButton tipPercent={"15%"}></TipButton>
        <TipButton tipPercent={"25%"}></TipButton>
        <TipButton tipPercent={"50%"}></TipButton>
        <Textfield placeholder={"Custom"}></Textfield>
      </div>
    </div>
  );
}

export default TipGrid;
