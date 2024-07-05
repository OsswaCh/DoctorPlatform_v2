import React from "react";
import CustumizedCalendar from "./CustumizedCalendar";
import Supprimer from "../buttons/SupprimerCal";
import Valider from "../buttons/ValiderCal";

function Calendar() {
  return (
    <div className="w-2/3 border border-color-client-dark rounded-2xl flex items-center px-2">
      <div className="">
        <CustumizedCalendar />
      </div>

      <div className="mx-20 w-full">
        <p className="text-sm">
          Cliquez sur une casse du calendrier pour la selectionner puis sur
          valider. le patient ressevra une notification pour cette date sur son
          calendrier.
        </p>

        <br />
        <p className="text-sm">
          Cliquez sur une casse du calendrier pour la selectionner puis sur
          supprimer. le patient ressevra une notification pour le rendezvous
          supprimé.
        </p>

        <div className="flex justify-evenly mt-10 ">
          <Supprimer id="calendar_supprime"/>
          <Valider id="calendar_valide"/>

        </div>
      </div>
    </div>
  );
}

export default Calendar;
