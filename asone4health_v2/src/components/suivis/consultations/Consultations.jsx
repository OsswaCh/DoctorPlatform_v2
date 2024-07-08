import React, {useState} from "react";
import InputBox from "../../Inputs/InputBox";
import Button from "../../Button";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-7 w-7 transition-transform bg-color-client rounded-full text-color-white hover:bg-color-client-dark`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={`${id === open ? "M5 12h14" : "M12 4.5v15m7.5-7.5h-15"}`}
        />
      </svg>
    );
  }
function Consultations() {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
  

  return (
    <div>
      <div className="flex flex-col h-full">
        <h3 className="text-color-text font-medium mb-5">
          Consultation du (ici la date du jour)
        </h3>
        <InputBox
          id="consultations"
          type="text"
          width="w-full"
          height="h-[60vh]"
        />
        <div className="mt-5 flex justify-end">
          <Button
            color="color-client"
            textColor="text-color-text"
            text="Enregistrer"
          />
        </div>
      </div>

      <div className="border rounded-2xl border-color-client-dark px-3 py-0 mt-32">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-color-client-dark font-Montserrat font-bold hover:text-color-client"
          >
            Consultation du : 
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            body ?
          </AccordionBody>
        </Accordion>

        
      </div>

      <div className="border rounded-2xl border-color-client-dark px-3 py-0 mt-4">
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-color-client-dark font-Montserrat font-bold hover:text-color-client"
          >
            Consultation du : 
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            body ?
          </AccordionBody>
        </Accordion>
      </div>


      <div className="border rounded-2xl border-color-client-dark px-3 py-0 mt-4">
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="text-color-client-dark font-Montserrat font-bold hover:text-color-client"
          >
            Consultation du : 
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            body ?
          </AccordionBody>
        </Accordion>
      </div>

    </div>
  );
}

export default Consultations;
