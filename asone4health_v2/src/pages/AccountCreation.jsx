import React, { useState } from "react"; 

import CircleLogo from "../components/CircleLogo";
import InputBox from "../components/Inputs/InputBox";
import Toggle from "../components/Toggle";
import Button from "../components/Button";

//TODO: center the doc type dic like the input div
const specialties = [
  "Infectiogue",
  "Oncologue",
  "Traumatologue",
  "MICI",
  "Médecine Générale",
  "Médecine de sport",
  "Diététicien(ne)",
  "Diabétologue",
  "Endocrinologue",
  "Cardiologue",
  "Néphrologue",
];
function AccountCreation() {

const  [input, setInput] = useState({
  nom: "",
  prenom: "",
  numTelephone: "",
  addEmail: "",
  MDP: "",
  confirmMDP: "",
  specialty: [],
})
 const [toggleStates, setToggleStates] = useState(
  
    specialties.reduce((acc, specialty) => {
      acc[specialty] = false;
      return acc;
    }, {})
  );

  const handleToggleChange = (specialty) => (event) => {
    const newCheckedState = event.target.checked;
    setToggleStates(prevStates => ({
      ...prevStates,
      [specialty]: newCheckedState
    }));
    console.log(`${specialty} state:`, newCheckedState);
  };

//TODO: fix the input (view the annoying logging and you will understand)
const handleInput = (e) => {
  const { id, value } = e.target;
  setInput(prevInput => ({
    ...prevInput,
    [id]: value

  }));
  
};

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
          <form className="" >
            <section className="flex flex-col w-full items-center relative ">
              <div className="mb-6 w-full flex flex-col items-center">
                <h2 className="text-center mb-2">Nom</h2>
                <InputBox type="text" id="nom" onChange={handleInput} />

                <h2 className="text-center mb-2 mt-7">Prénom</h2>
                <InputBox type="text" id="prenom" onChange={handleInput}/>
          

                <h2 className="text-center mb-2 mt-7">Télephone</h2>
                <InputBox type="number" id="numTelephone" onChange={handleInput}/>

                <h2 className="text-center mb-2 mt-7">Adresse Email</h2>
                <InputBox type="email" id="addEmail" onChange={handleInput}/>

                <h2 className="text-center mb-2 mt-7">Mot de Passe</h2>
                <InputBox type="password" id="MDP" onChange={handleInput}/>

                <h2 className="text-center mb-2 mt-7">
                  Confirmation du mot de passe
                </h2>
                <InputBox type="password" id="confirmMDP" onChange={handleInput}/>

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
        <div className=" col-span-4 md:col-start-3 md:col-span-2 bg-white flex flex-col items-center justify-center h-screen">
          <div className="min-w-[25vh] -mt-12">
      {specialties.map((specialty) => (
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
            <Button color="color-main" text="Continuer" />
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
