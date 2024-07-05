import React from "react";
import DefaultImage from "../../src/assests/images/defaultAvatar.jpg";
import Collegues from "../components/Dashboard/Collegues";
import CustumizedCalendar from "../components/Calendar/CustumizedCalendar";
import Supprimer from "../components/buttons/SupprimerCal";
import MedicalInformation from "../components/MedicalInformation/MedicalInformation";
import Suivis from "../components/suivis/Suivis";

function TestPage() {
  return (
    <div className=" m-10">

    <Suivis />

    </div>
  );
}

export default TestPage;
