import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

//make the add work once

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
      } h-7 w-7 transition-transform bg-color-client rounded-full text-color-white`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={`${id === open ? "M5 12h14" : "M12 4.5v15m7.5-7.5h-15"}`}
      />
    </svg>
  );
}

function MedicalInformation() {
  
  const [open, setOpen] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [content, setContent] = useState([
    "This patient does not have any medical information yet."
  ]);
  const [newContent, setNewContent] = useState("");

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const toggleEdit = () => setIsEditing(!isEditing);
  const toggleAdd = () => {
    setIsAdding(!isAdding);
    setNewContent("");
  };
  
  const handleContentChange = (index, value) => {
    const updatedContent = [...content];
    updatedContent[index] = value;
    setContent(updatedContent);
  };

  const addNewContent = () => {
    if (newContent.trim() !== "") {
      setContent([...content, newContent.trim()]);
      setNewContent("");
      setIsAdding(false);
    }
  };

  return (
    <div className="border rounded-2xl border-color-client-dark px-3 py-0">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-color-client-dark font-Montserrat hover:text-color-client"
        >
          Informations Médicales
        </AccordionHeader>
        <AccordionBody className="font-Montserrat">
          {content.map((item, index) => (
            <div key={index} className="mb-4">
              {isEditing ? (
                <textarea
                  value={item}
                  onChange={(e) => handleContentChange(index, e.target.value)}
                  className="w-full p-2 bg-color-input-box border rounded-xl text-color-text font-medium shadow-inner-custom resize-none focus:outline-color-client-dark"
                />
              ) : (
                <p className="font-medium text-color-text">{item}</p>
              )}
            </div>
          ))}
          
          {isAdding && (
            <div className="mt-4">
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Add new medical information"
                className="w-full p-2 bg-color-input-box border rounded-xl text-color-text font-medium shadow-inner-custom resize-none focus:outline-color-client-dark"
              />
              <div className="mt-2 flex justify-between space-x-2">
                <button
                  onClick={addNewContent}
                  className="font-bold rounded-2xl bg-color-client w-32 h-8 text-base hover:bg-color-client-dark focus:outline-none focus:ring-2 focus:ring-color-client focus:ring-opacity-50 transition-colors duration-200"
                >
                  Valider
                </button>
                <button
                  onClick={toggleAdd}
                  className="font-bold rounded-2xl bg-gray-300 w-32 h-8 text-base hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          
          <div className="mt-4 flex justify-evenly space-x-2">
            <button
              onClick={toggleEdit}
              className="font-bold rounded-2xl bg-color-client w-32 h-8 text-base hover:bg-color-client-dark focus:outline-none focus:ring-2 focus:ring-color-client focus:ring-opacity-50 transition-colors duration-200"
            >
              {isEditing ? "Valider" : "Modifier"}
            </button>
            {!isAdding && (
              <button
                onClick={toggleAdd}
                className="font-bold rounded-2xl bg-color-client w-32 h-8 text-base hover:bg-color-client-dark focus:outline-none focus:ring-2 focus:ring-color-client focus:ring-opacity-50 transition-colors duration-200"
              >
                Ajouter
              </button>
            )}
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default MedicalInformation;