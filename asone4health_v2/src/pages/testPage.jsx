import React from "react";
import DefaultImage from "../../src/assests/images/defaultAvatar.jpg";
import Collegues from "../components/Dashboard/Collegues";
import CustumizedCalendar from "../components/Calendar/CustumizedCalendar";
import Supprimer from "../components/buttons/SupprimerCal";
import MedicalInformation from "../components/MedicalInformation/MedicalInformation";

function TestPage() {
  return (
    <div className=" m-10">
      <MedicalInformation />
    </div>
  );
}

export default TestPage;
