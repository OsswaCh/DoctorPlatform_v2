import React from "react";

//TODO: fix doc info call
//TODO : make the details dynamic
//placeholder 
const doctorInfo = [
    { label: "Nom", key: "lastName" },
    { label: "Prénom", key: "firstName" },
    { label: "Email", key: "email" },
    { label: "Adresse", key: "address" },
    { label: "Téléphone", key: "phone" },
    { label: "Numéro sécurité sociale", key: "socialSecurityNumber" }
  ];
  

function DoctorDetails(doctor) {
  return (
    <div className="h-full w-1/3 border border-color-client-dark rounded-2xl flex items-center px-2">
      <div className="w-full">
        {doctorInfo.map(({ label, key }) => (
          <div key={key} className="mb-2 last:mb-0">
            <span className="font-medium">{label} : </span>
            <span>{doctor[key] || 'N/A'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorDetails;
