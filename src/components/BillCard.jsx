import React from "react";
import BillRow from "./BillRow";
import Button from "./Button";

function BillCard() {
  return (
    <div className="flex flex-col ml-7 p-7 bg-primary rounded-xl justify-between">
      <div className="flex flex-col flex-start">
        <BillRow label="Tip Amount"></BillRow>
        <BillRow label="Total"></BillRow>
      </div>
      <div className="flex flex-col">
        <Button text="RESET" backgroundColor="bg-primary-light"></Button>
      </div>
    </div>
  );
}

export default BillCard;
