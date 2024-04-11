import React from "react";
import Button from "./Button";
import Textfield from "./Textfield";

function TipGrid() {
  return (
    <div className="mt-1 max-w-sm">
      <label className="mt-2 flex justify-start text-sm font-medium leading-6 text-gray">
        Select Tip %
      </label>
      <div className="mt-1 grid gap-y-1.5 gap-x-3 grid-cols-3 grid-rows-2">
        <Button text={"5%"}></Button>
        <Button text={"10%"}></Button>
        <Button text={"15%"}></Button>
        <Button text={"25%"}></Button>
        <Button text={"50%"}></Button>
        <Textfield placeholder={"Custom"}></Textfield>
      </div>
    </div>
  );
}

export default TipGrid;
