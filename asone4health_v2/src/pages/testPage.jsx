import React from "react";
import DefaultImage from "../../src/assests/images/defaultAvatar.jpg";
import Collegues from "../components/Dashboard/Collegues";
import CustumizedCalendar from "../components/Calendar/CustumizedCalendar";
import Supprimer from "../components/buttons/SupprimerCal";

function TestPage() {
  
  return (
    <div className=" m-10">

      <Supprimer id="calendar_supprime"/>

    </div>
  );
}

export default TestPage;
