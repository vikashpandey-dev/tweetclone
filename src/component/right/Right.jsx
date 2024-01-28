import React from "react";
import Carousel from "./Carousel";
import Who from "./Who";
import Do from "./Do";
function Right() {
  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="my-48 px-16">
        <Who />
      </div>
      <div className="my-48 px-16">
        <Do/>
      </div>
    </>
  );
}

export default Right;
