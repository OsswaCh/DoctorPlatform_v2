import React, { useEffect, useState } from "react";

import CircleLogo from "../components/CircleLogo";
import InputBox from "../components/Inputs/InputBox";
import Toggle from "../components/Toggle";
import Button from "../components/Button";
import { BASE_URL } from "../Config";

//TODO: center the doc type dic like the input div
//

//fetching the specialties from the end point
const specialties = await fetch(`${BASE_URL}/doctor/specialite`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => response.json());
const specialties_list = specialties.map((specialty) => specialty.name);

function AccountCreation() {
  /////variables////

  const [doctorSpecialties, setDoctorSpecialties] = useState([]);

  const [input, setInput] = useState({
    nom: "",
    prenom: "",
    numTelephone: "",
    addEmail: "",
    doctorId: "",
    specialty: [],
  });

  const [toggleStates, setToggleStates] = useState(
    specialties_list.reduce((acc, specialty) => {
      acc[specialty] = false;
      return acc;
    }, {})
  );


  const [docJSON, setDocJSON] = useState({
    recourceType: "Practitioner",
    identifier: [
      {
        system: "http://fhir.fr/doctor-ids",
        value: "",
        type: {
          text: "Doctor ID",
        },
      }
    ],
    name: [
      {
        family: "",
        given: [""],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "",
      },
      {
        system: "email",
        value: "",
      },
    ],
    specialty: [],
    password: null,
    email: "",
    meta: {
      lastUpdated: null,
    },
  })


useEffect(() => {
  setDocJSON(prevDocJSON => ({
    ...prevDocJSON,
    identifier: [...prevDocJSON.identifier, {value: input.doctorId}],
    name: [{family: input.nom, given: [input.prenom]}],
    telecom: [
      {system: "phone", value: input.numTelephone},
      {system: "email", value: input.addEmail},
    ],
    specialty: doctorSpecialties,
    email: input.addEmail,
  }))
}, [input, doctorSpecialties])

useEffect(() => {
  console.log(docJSON)
}, [docJSON])


  /////functions////

  const handleToggleChange = (specialty) => (event) => {
    //catching the new state of the toggle
    const newCheckedState = event.target.checked;
    setToggleStates((prevStates) => ({
      ...prevStates,
      [specialty]: newCheckedState,
    }));
    console.log(`${specialty} state:`, newCheckedState);
    //creating the specialties array
    //TODO?: we maight have to make this using use effect
    if (newCheckedState) {
      setDoctorSpecialties((prevSpecialties) => [
        ...prevSpecialties,
        specialty,
      ]);
    } else {
      setDoctorSpecialties((prevSpecialties) =>
        prevSpecialties.filter((s) => s !== specialty)
      );
    }

    console.log("Doctor Specialties:", doctorSpecialties);
  };

  //TODO: fix the input (view the annoying logging and you will understand)
  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };


  //posting the new doctor
  async function postDoctor() {
    const response = await fetch(`${BASE_URL}/automatic_register_doctor`, {
      method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(docJSON),
    });

     if (!response.ok) {
        throw new Error(
          `Erreur lors de l'ajout du médecin: ${response.status}`
        );
      }
      console.log("Doctor added successfully");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postDoctor();
  }

  return (
    <div className="w-screen h-screen grid grid-cols-5 relative">
      {/* color area */}
      <div className="col-span-1 bg-color-main "></div>

      {/* input area */}
      <div className="col-span-4 bg-white flex justify-center">
        <div className="p-8 w-full max-w-md col-start-2">
          <h1 className="text-center font-bold text-3xl text-color-client-dark mb-16 mt-10">
            Création de compte
          </h1>

          {/* Input Boxes */}
          <form onSubmit={handleSubmit} >
            <section className="flex flex-col w-full items-center relative ">
              <div className="mb-6 w-full flex flex-col items-center">
                <h2 className="text-center mb-2">Nom</h2>
                <InputBox
                  type="text"
                  id="nom"
                  onChange={handleInput}
                  required
                />

                <h2 className="text-center mb-2 mt-7">Prénom</h2>
                <InputBox
                  type="text"
                  id="prenom"
                  onChange={handleInput}
                  required
                />

                <h2 className="text-center mb-2 mt-7 max-w-48">Numéro d'inscription à l'ordre des médecins</h2>
                <InputBox
                  type="number"
                  id="doctorId"
                  onChange={handleInput}
                  required
                />
                <h2 className="text-center mb-2 mt-7">Télephone</h2>
                <InputBox
                  type="number"
                  id="numTelephone"
                  onChange={handleInput}
                />

                <h2 className="text-center mb-2 mt-7">Adresse Email</h2>
                <InputBox
                  type="email"
                  id="addEmail"
                  onChange={handleInput}
                  required
                  pattern="^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,}$"
                />

{/*                <h2 className="text-center mb-2 mt-7">Mot de Passe</h2>*/}
{/*                <InputBox type="password" id="MDP" onChange={handleInput} />*/}

{/*                <h2 className="text-center mb-2 mt-7">*/}
{/*                  Confirmation du mot de passe*/}
{/*                </h2>*/}
{/*                <InputBox*/}
{/*                  type="password"*/}
{/*                  id="confirmMDP"*/}
{/*                  onChange={handleInput}*/}
{/*                />*/}

                <br />
                <button className="w-64 h-9 text-text-color-text border-solid border border-color-text rounded-3xl mt-10 font-bold text-color-text">
                  Télécharger un avatar
                </button>
                <br />
              </div>
            </section>
          </form>
        </div>

        {/* specialty */}
        <div className=" col-span-4 md:col-start-3 md:col-span-2 bg-white flex flex-col items-center justify-center pt-5">
          <div className="min-w-[25vh] -mt-12">
            {specialties_list.map((specialty) => (
              <div
                key={specialty}
                className="flex flex-row justify-center mb-[1.1rem]"
              >
                <h2 className="text-center">{specialty}</h2>
                <div className="ml-auto">
                  <Toggle
                    id={specialty}
                    checked={toggleStates[specialty]}
                    onChange={handleToggleChange(specialty)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="relative -bottom-40 -right-16 ">
            <Button color="color-main" text="Continuer" type="submit" />
          </div>
        </div>
      </div>

      {/* circle logo */}
      <div className="absolute max-w-[40vw] top-[15vh] left-1/5 flex items-center justify-center">
        <CircleLogo size="medium-large" />
      </div>
    </div>
  );
}

export default AccountCreation;
