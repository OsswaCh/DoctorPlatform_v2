import React from "react";
import Toggle from "../../Toggle";
import Questionnaire from "./Questionnaire";
import NumberInputBox from "../../Inputs/NumberInputBox";

function PlanDeTraitement() {
  return (
    <div>
      {/* section 1 */}
      <section>
        <h2 className="font-semibold text-color-client-dark text-base">
          Objectifs du plan de traitement
        </h2>

        <div className="mt-5 mx-4">
          {[
            "Mesures préventives pour réduire les symptomes",
            "Thérapies complémentaires pour soulager les symptomes",
            "Perdre du poids",
            "Traitement médicamenteux",
          ].map((objectif) => (
            <div
              className="flex flex-row items-center mb-3 font-medium"
              key={objectif}
            >
              <h2>{objectif}</h2>
              <div className="ml-auto">
                <Toggle id={objectif} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section 2  */}
      <section className="mt-8">
        <h2 className="font-semibold text-color-client-dark text-base">
          Evaluation l'aide de questionnaires
        </h2>

        <div className="mt-5 mx-4">
          <div className="">
            {[
              "Nutrition, Régime sans sel",
              "Qualité de vie de I'OMS",
              "Quality of Life",
              "Evaluation, prise en charge pour l'Obésité",
            ].map((questionnaire) => (
              <div key={questionnaire} className="mb-3">
                <Questionnaire text={questionnaire} key={questionnaire} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="mt-8">
        <h2 className="font-semibold text-color-client-dark text-base">
          {" "}
          Indicateurs IoT
        </h2>
        <div className="mt-5 mx-4">
          {["Nombre de pas", "Faire du vélo", "Rythme cardiaque"].map(
            (indicateur) => (
              <div key={indicateur} className="flex flex-row items-center mb-3 font-medium">
                <h2>{indicateur}</h2>

                <div className="flex flex-row ml-auto">
                  <div className="mr-16">
                    <NumberInputBox />
                  </div>

                  <Toggle id={indicateur} />
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* section 4 */}
      <section className="mt-8">
        <h2 className="font-semibold text-color-client-dark text-base">
          Recommandations Diététique
        </h2>
        <div className="mt-5 mx-4">
          {["Céréales", "Fruits", "Viandes", "Produits laitier", "Poisson"].map(
            (indicateur) => (
              <div key={indicateur} className="flex flex-row items-center mb-3 font-medium">
                <h2>{indicateur}</h2>

                <div className="flex flex-row ml-auto">
                  <div className="mr-16">
                    <NumberInputBox />
                  </div>

                  <Toggle id={indicateur} />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default PlanDeTraitement;
