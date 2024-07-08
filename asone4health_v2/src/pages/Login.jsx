// rfce
import React from "react";
import "../App.css";
import InputBox from "../components/Inputs/InputBox";
import Button from "../components/Button";
import CircleLogo from "../components/CircleLogo";



function Login() {
  return (
    <div className="w-screen h-screen grid grid-rows-5 md:grid-cols-4 lg:grid-cols-4 ">
      {/* First Column */}
      <div className="lg:col-span-2 bg-color-main  lg:h-screen md:cols-span-1 md:h-screen "></div>
      
      {/* Fourth Column */}
      <div className=" row-start-4 lg:row-start-1 lg:col-start-4 md:col-start-4 md:row-start-1 md:-left-[10vh] lg:left-0 bg-white flex items-center justify-center relative lg:h-screen md:h-screen mr-20">
        <div className="p-8 w-full max-w-md">
          <h1 className="text-center mb-8 font-bold text-xl text-color-client-dark ">
            S'identifier
          </h1>

          {/* Input Section */}
          <section className="flex flex-col w-full items-center relative">
            <div className="mb-6 w-full flex flex-col items-center ">
              <h2 className="text-center mb-2">Adresse Email</h2>
              <InputBox type="email" />
            </div>

            <div className="mb-6 w-full flex flex-col items-center">
              <h2 className="text-center mb-2">Mot de Passe</h2>
              <InputBox type="password" />
            </div>

            <Button color="color-main" text="Continuer" />
          </section>

          <br />

          {/* New Section */}
          <section className="flex flex-col w-full items-center relative bottom-10 top-20 mt-24 ">
            <div className="flex flex-col w-full items-center justify-center mt-4 min-w-[50vw]">
              <h3 className="mb-5">Mot de passe oublié ?</h3>
              <button className="w-80 px-4 py-2 text-text-color-text border-solid border border-color-text rounded-xl mb-10">
                Nouveau mot de passe
              </button>
            </div>

            <div className="flex flex-col w-full items-center justify-center mt-4  min-w-[50vw]">
              <h3 className="mb-5">Nouveau chez AsOne4Health ?</h3>
              <button className="w-80 px-4 py-2 text-color-text border-solid border border-color-text rounded-xl">
                Créer votre compte AsOne4Health
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* CircleLogo Centered */}
      <div className="absolute grid inset-0 grid-rows-6 grid-cols-3 md:grid-cols-1 lg:grid-cols-3 ">
        <div className="row-start-4 col-start-2 lg:col-start-2 lg:row-start-4 md:row-start-4 flex items-center justify-center  ">
          <CircleLogo size="large" />
        </div>
      </div>
    </div>
  );
}

export default Login;
