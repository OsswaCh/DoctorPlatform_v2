import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { usePatient } from "../contexts/PatientContext";

import Logo2 from "../../src/assests/images/Logo_arriere_transparent.png";
import Toggle from "./Toggle";
import Button from "./Button";
import ProfileSVG from "./SVGs/ProfileSVG";
import LogOutSVG from "./SVGs/LogOutSVG";
import SearchSVG from "./SVGs/SearchSVG";
import { BASE_URL } from "../Config";
import ColleagueExtraction from "../APIs/Colleagues";
import GetPatients from "../APIs/AllPatients";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";
import { select } from "@material-tailwind/react";

//TODO: link to the database instead of placeholders
//TODO: bigger side bar fit the toggle
//TODO: make the sidebar fit the entire screen no matter how long it is
//TODO: make the sidebar FIXED  and the main content scrollable (failed)
//TODO : search bar ??
//TODO: SPLIT THIS FILE IT S TOO LONG
//TODO: do the toggles

function SideBar() {
  const doc = useAuth();
  //console.log("doc", doc);

  const doc_id = doc.user.id;
  const specialties = doc.user.specialties;

  //console.log("doc_id", doc_id);


  //extracting patients
  const [patients_list, setPatientsList] = useState([]);
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const result = await GetPatients(doc_id);
        setPatientsList(result);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };
    fetchPatients();
  }, []);

  

  //extracting the specialties from the user data
  const extractSpecialties = (doctorData) => {
    if (
      !doctorData ||
      !doctorData.speciality ||
      !Array.isArray(doctorData.speciality)
    ) {
      return [];
    }

    const specialties_list = doctorData.speciality.flatMap(
      (specialty) => specialty.coding?.map((coding) => coding.display) || []
    );

    return [...new Set(specialties_list)]; // Remove duplicates
  };
  const specialties_list = extractSpecialties({ speciality: specialties });

  //exraction of the collegues

  const [colleagues, setColleagues] = useState([]);

  useEffect(() => {
    const fetchColleagues = async () => {
      try {
        const result = await ColleagueExtraction(doc_id);
        setColleagues(result);
      } catch (error) {
        console.error("Error fetching colleagues:", error);
      }
    };
    fetchColleagues();
  }, []);


  //only one patient at a time 
  const [activePatient, setActivePatient] = useState(null);
  const handlePatientClick = (patient) => {
    setActivePatient(patient);
  };

  //setting the patient context
  const { setSelectedPatient } = usePatient();
  useEffect(() => {
    setSelectedPatient(activePatient);
  }, [activePatient]);

  //only one doctor at a time
  const [activeDoctor, setActiveDoctor] = useState(null);
  const handleDoctorClick = (doctor) => {
    setActiveDoctor(doctor);
  };


  //activation of the toggle
  const [toggleStates, setToggleStates] = useState(
    specialties_list.reduce((acc, specialty) => {
      acc[specialty] = false;
      return acc;
    }, {})
  );

  return (
    <div className=" w-[17rem]   border-r-4 border-color-main shadow-[0.5px_0px_25px_0px] shadow-color-main">
      {/* section 1 */}
      <div className="flex flex-row items-center justify-between px-5  ">
        <img src={Logo2} alt="logo" className="w-16 h-16" />
        <ProfileSVG />
        <LogOutSVG />
      </div>

      {/* section 2 */}
      <div className="bg-color-main w-full h-16 flex justify-center items-center">
        <form className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 right-3 flex items-center ps-3 pointer-events-none">
              <SearchSVG />
            </div>
            <input
              type="search"
              id="search-bar"
              className="block w-full h-9 p-4 pe-5 text-sm text-color-text border border-gray-300 rounded-xl bg-gray-50 focus:ring-color-client-dark focus:border-color-border shadow-inner-custom"
            />
          </div>
        </form>
      </div>

      {/* section 3 */}
      <div className="px-3 overflow-y-scroll  max-h-64 ">
        <h1 className="text-2xl py-2 text-color-client-dark font-bold">
          Spécialitées
        </h1>

        <div className="mt-3">
          {specialties_list.map((active_specialty) => (
            <div key={active_specialty} className="flex mb-2">
              <h2 className="">{active_specialty}</h2>
              <div className="ml-auto">
                <Toggle id={active_specialty} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="bg-color-main h-0.5 w-[15rem] my-8 rounded-md mx-auto border-none" />

      {/* section 4 */}

      <div className="px-3 overflow-y-scroll  max-h-96 -mt-5 ">
        <h1 className="text-2xl text-color-client-dark font-bold">Patients</h1>
        <div className="mt-3">
          {patients_list.map((active_patient) => (
            <div
              key={active_patient}
              className="flex flex-row justify-center mb-2"
            >
              <div className="ml-auto my-1">
                <Button
                  textColor="text-color-white"
                  height="h-6"
                  color="color-client"
                  text={active_patient[0]}
                  width="w-[14rem]"
                  id={active_patient[1]}
                  clickedColor={"bg-color-client-dark"} 
                  isActive= {activePatient === active_patient}
                  onClick={() => handlePatientClick(active_patient)}
                />{" "}
              </div>
            </div>
          ))}
        </div>
        <button className="border border-color-client-dark w-[14rem] h-8 font-bold rounded-2xl mt-3 text-color-client-dark">
          {" "}
          AJOUTER UN PATIENT{" "}
        </button>
      </div>
      <hr className="bg-color-main h-0.5 w-[15rem] my-8 rounded-md mx-auto border-none" />
      {/* section 5 */}

      <div className="px-3 overflow-y-scroll  max-h-96 -mt-5 ">
        <h1 className="text-2xl  text-color-client-dark font-bold">Médecins</h1>

        <div className="mt-3">
          {colleagues.map((active_doctor) => (
            <div
              key={active_doctor}
              className="flex flex-row justify-center mb-2"
            >
              <div className="ml-auto my-1">
                <Button
                  textColor="text-color-white"
                  height="h-6"
                  color="color-main"
                  text={active_doctor}
                  width="w-[14rem]"
                  id={active_doctor}
                  clickedColor={"bg-color-client-dark"}
                  isActive= {activeDoctor === active_doctor}
                  onClick={() => handleDoctorClick(active_doctor)}

                />{" "}
              </div>
            </div>
          ))}
        </div>

        <button className="border border-color-client-dark w-[14rem] h-8 font-bold rounded-2xl mt-3 text-color-client-dark ">
          {" "}
          AJOUTER UN MEDECIN{" "}
        </button>

        <button className="border border-color-client-dark w-[14rem] h-8 font-bold rounded-2xl mt-2 text-color-client-dark mb-10">
          {" "}
          COLABORATION{" "}
        </button>
      </div>
    </div>
  );
}

export default SideBar;
