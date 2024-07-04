import React from "react";
import Collegues from "../components/Collegues";
import DefaultImage from "../../src/assests/images/defaultAvatar.jpg";

function TestPage() {
  
  return (
    <div className=" m-10">
      <Collegues imageSrc={DefaultImage} />
    </div>
  );
}

export default TestPage;
