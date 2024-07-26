// rfce
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

import InputBox from "../components/Inputs/InputBox";
import Button from "../components/Button";
import CircleLogo from "../components/CircleLogo";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    const result = await auth.loginAction({
      email: input.email,
      password: input.password,
    });
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.error || "Login failed. Please try again.");
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-screen grid grid-rows-5 md:grid-cols-4 lg:grid-cols-4 ">
      {/* CircleLogo Centered */}
      <div className="absolute grid inset-0 grid-rows-6 grid-cols-3 md:grid-cols-1 lg:grid-cols-3 ">
        <div className="row-start-4 col-start-2 lg:col-start-2 lg:row-start-4 md:row-start-4 flex items-center justify-center  ">
          <CircleLogo size="large" />
        </div>
      </div>
      {/* First Column */}
      <div className="lg:col-span-2 bg-color-main  lg:h-screen md:cols-span-1 md:h-screen "></div>

      {/* Fourth Column */}

      <div className=" row-start-3 -mt-20 -mb-10  md:mr-3 inset-x-0  lg:row-start-2 lg:col-start-4 md:col-start-4 md:row-start-2 md:-left-[10vh] lg:left-0 bg-white flex  justify-center lg:h-screen md:h-screen ">
        <div className="p-8 w-full max-w-md ">
          <h1 className="text-center mb-8 font-bold text-xl text-color-client-dark ">
            S'identifier
          </h1>

          {/* Input Section */}
          <form onSubmit={handleSubmitEvent}>
            <section className="flex flex-col w-full items-center relative">
              <div className="mb-6 w-full flex flex-col items-center ">
                <h2 className="text-center mb-2">Adresse Email</h2>
                <InputBox type="email" name="email" onChange={handleInput} />
              </div>

              <div className="mb-6 w-full flex flex-col items-center">
                <h2 className="text-center mb-2">Mot de Passe</h2>
                <InputBox
                  type="password"
                  name="password"
                  onChange={handleInput}
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <Button color="color-main" text="Continuer" type="submit" />
            </section>
          </form>
          <br />

          {/* New Section */}
          <section className="flex flex-col w-full items-center relative bottom-10 top-20 mt-24 ">
            <div className="flex flex-col w-full items-center justify-center mt-4 min-w-[50vw]">
              <h3 className="mb-5">Mot de passe oublié ?</h3>
              <button className="w-80 px-4 py-2 text-text-color-text border-solid border border-color-text rounded-xl mb-10 hover:bg-color-input-box hover:transition-all duration-100 hover:translate-x-1 hover:translate-y-1 hover:shadow-md">
                Nouveau mot de passe
              </button>
            </div>

            {/*TODO: make this button functional again*/}
            <div className="flex flex-col w-full items-center justify-center mt-4  min-w-[50vw]">
              <h3 className="mb-5">Nouveau chez AsOne4Health ?</h3>
              <button className="w-80 px-4 py-2 text-color-text border-solid border border-color-text rounded-xl hover:bg-color-input-box hover:transition-all duration-100 hover:translate-x-1 hover:translate-y-1 hover:shadow-md "
              onClick={() => navigate("/creation-de-compte")}>
              
                Créer votre compte AsOne4Health
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
