import React from "react";
import Logo2 from "../../src/assests/images/Logo_arriere_transparent.png";
import Toggle from "./Toggle";
import Button from "./Button";

//TODO: link to the database instead of placeholders
//TODO: bigger side bar fit the toggle

function sideBar() {
  return (
    <div className="w-[17rem] h-full  border-r-4 border-color-main shadow-[0.5px_0px_25px_0px] shadow-color-main">
      {/* section 1 */}
      <div className="flex flex-row items-center justify-between px-5  ">
        <img src={Logo2} alt="logo" className="w-16 h-16" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current text-color-client-dark -ml-2"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-color-client-dark"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
      </div>

      {/* section 2 */}
      <div className="bg-color-main w-full h-16 flex justify-center items-center">
        <form class="max-w-md mx-auto">
          <div class="relative">
            <div class="absolute inset-y-0 right-3 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-color-client-dark dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
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
          {[
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
          ].map((active_specialty) => (
            <div
              key={active_specialty}
              className="flex flex-row justify-center mb-2"
            >
              <h2 className="text-center">{active_specialty}</h2>
              <div className="ml-auto">
                <Toggle id={active_specialty} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="bg-color-main h-0.5 w-[15rem] my-8 rounded-md mx-auto border-none" />

      {/* section 3 */}

      <div className="px-3 overflow-y-scroll  max-h-96 -mt-5 ">
        <h1 className="text-2xl  text-color-client-dark font-bold">Patients</h1>

        {/* TODO : make the button  text coloe dynamic */}
        <div className="mt-3">
          {["Infectiogue", "Oncologue", "Traumatologue", "MICI"].map(
            (active_patient) => (
              <div
                key={active_patient}
                className="flex flex-row justify-center mb-2"
              >
                <div className="ml-auto my-1">
                  <Button
                    textColor="white"
                    height="h-6"
                    color="color-client"
                    text={active_patient}
                    width="w-[14rem]"
                    id={active_patient}
                  />{" "}
                </div>
              </div>
            )
          )}
        </div>

        <button className="border border-color-client-dark w-[14rem] h-8 font-bold rounded-2xl mt-3 text-color-client-dark">
          {" "}
          AJOUTER UN PATIENT{" "}
        </button>
      </div>
      <hr className="bg-color-main h-0.5 w-[15rem] my-8 rounded-md mx-auto border-none" />

      {/* section 4 */}

      <div className="px-3 overflow-y-scroll  max-h-96 -mt-5 ">
        <h1 className="text-2xl  text-color-client-dark font-bold">Médecins</h1>

        <div className="mt-3">
          {["Infectiogue", "Oncologue", "Traumatologue", "MICI"].map(
            (active_doctor) => (
              <div
                key={active_doctor}
                className="flex flex-row justify-center mb-2"
              >
                <div className="ml-auto my-1">
                  <Button
                    textColor="white"
                    height="h-6"
                    color="color-main"
                    text={active_doctor}
                    width="w-[14rem]"
                    id={active_doctor}
                  />{" "}
                </div>
              </div>
            )
          )}
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

export default sideBar;
