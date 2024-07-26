import React from "react";
import { useAuth } from "../../contexts/AuthProvider";

import Collegues from "./Collegues";
import DefaultImage2 from "../../assests/images/defaultAvatar2.jpeg";
import DoctorDetails from "./DoctorDetails";
import Calendar from "../Calendar/Calendar";
import MedicalInformation from "./MedicalInformation";
import Suivis from "../suivis/Suivis";

//TODO: set a max number of collegues
//TODO: amp the collegues from the DB
//TODO: change the 1/3 in the upper row to be fixed

function DocMainCard() {

const { user } = useAuth();
const {nom, prenom, email, address, phone, socialSecurityNumber} = user;

  return (
    <div className="relative h-full w-full rounded-3xl flex flex-col min-w-[60em]">
      {/* header */}
      <div className="w-full h-16 bg-color-client-dark rounded-t-3xl flex px-5 items-center relative">
        {/* collegues sections */}

        <div className="flex">
          <Collegues name="Rayen Rayen" imageSrc={DefaultImage2} />
        </div>
        {/* title */}
        <div className="absolute inset-x-0 flex items-center justify-center ">
          <h1 className="text-2xl font-bold text-color-white ">
           {user.nom}
          </h1>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-col h-full border border-color-main rounded-b-3xl">
  <div className=" px-3 pt-2 flex gap-2">
    <DoctorDetails nom={nom} prenom={prenom} email={email} address={address} phone={phone} socialSecurityNumber={socialSecurityNumber}  />
    
    <Calendar />
  </div>
  
  <div className="flex-1 px-3 pt-2 flex gap-2 overflow-auto">
    <div className="w-1/3"><MedicalInformation /></div>
    <div className="w-2/3"><Suivis /></div>
  </div>
</div>
    </div>
  );
}

export default DocMainCard;
