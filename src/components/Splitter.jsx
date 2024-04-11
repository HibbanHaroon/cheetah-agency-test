import { useState } from "react";
import Card from "./Card";

function Splitter() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-primary text-xl font-semibold tracking-widest">
        <span>SPLI</span>
        <span>TTER</span>
      </div>
      <Card></Card>
    </div>
  );
}

export default Splitter;
