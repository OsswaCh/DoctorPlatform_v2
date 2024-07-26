import React from "react";

// Configuration for doctor details display
const doctorInfo = [
  { label: "Nom", key: "prenom" },
  { label: "Prénom", key: "nom" },
  { label: "Email", key: "email" },
  { label: "Adresse", key: "address" },
  { label: "Téléphone", key: "phone" },
  { label: "Numéro sécurité sociale", key: "socialSecurityNumber" },
];

function DoctorDetails({ nom, prenom, email, address, phone, socialSecurityNumber }) {
  // Mapping the props into an object for easier access
  const doctor = { nom, prenom, email, address, phone, socialSecurityNumber };

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
