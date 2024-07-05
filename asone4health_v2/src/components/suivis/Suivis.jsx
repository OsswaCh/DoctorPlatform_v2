import React from "react";
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

function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="">
      <div className="border rounded-2xl border-color-client-dark px-3 py-0">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1) } className="text-color-client-dark font-Montserrat hover:text-color-client">
            Plan(s) de Traitement(s)
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>

      <br />

      <div className="border rounded-2xl border-color-client-dark px-3 py-0">
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} >
          <AccordionHeader onClick={() => handleOpen(2)}className="text-color-client-dark font-Montserrat hover:text-color-client">
          Suivi des conditions médicale (IoT)
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>

      <br />

      <div className="border rounded-2xl border-color-client-dark px-3 py-0">
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className="text-color-client-dark font-Montserrat hover:text-color-client">
            Consulatation(s)
          </AccordionHeader>
          <AccordionBody className="font-Montserrat">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionCustomIcon;
