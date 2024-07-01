import React from "react";
import CircleLogo from "../components/CircleLogo";
import InputBox from "../components/InputBox";
import Toggle from "../components/Toggle";

function AccountCreation() {
  return (
    <div className="w-screen h-screen grid grid-cols-5">
      {/* color area */}
      <div className="col-span-1 bg-color-main "></div>

      {/* input area */}
      <div className="col-span-3 bg-white flex justify-center">
        <div className="p-8 w-full max-w-md">
          <h1 className="text-center font-bold text-3xl  text-color-client-dark mb-16 mt-10">
            Création de compte
          </h1>

          {/* Input Boxes */}

          <section className="flex flex-col w-full items-center relative">
            <div className="mb-6 w-full flex flex-col items-center">
              <h2 className="text-center mb-2">Nom</h2>
              <InputBox type="text" />

              <h2 className="text-center mb-2 mt-7">Prénom</h2>
              <InputBox type="text" />

              <h2 className="text-center mb-2 mt-7">Télephone</h2>
              <InputBox type="number" />

              <h2 className="text-center mb-2 mt-7">Adresse Email</h2>
              <InputBox type="email" />

              <h2 className="text-center mb-2 mt-7">Mot de Passe</h2>
              <InputBox type="password" />

              <h2 className="text-center mb-2 mt-7">
                Confirmation du mot de passe
              </h2>
              <InputBox type="text" />

              <br />
              <button className="w-64 h-9 text-text-color-text border-solid border border-color-text rounded-3xl mt-10 font-bold text-color-text">
                Télécharger un avatar
              </button>
              <br />
            </div>
          </section>
        </div>
      </div>
      {/* circle logo */}
      <div className="absolute inset-x-14 top-12">
        <CircleLogo size="medium-large" />
      </div>
    </div>
  );
}

export default AccountCreation;
