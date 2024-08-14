import { BASE_URL } from "../Config";

const GetPatientsNames = (data) => {
  const names = data.map((patient) => {
    const name = patient.name[0];
    const family = name.family;
    const given = name.given ? name.given.join(' ') : '';
    return [`${given} ${family}`.trim(), patient._id];
  });

  return names; // Remove Set to keep all patients, even if names are duplicate
};

const GetPatients = async (doc_id) => {
  try {
    const response = await fetch(`${BASE_URL}/doctor/activated_patients/${doc_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);  
    }

    const data = await response.json();
    console.log(data);
    return GetPatientsNames(data);
  } catch(error) {
    console.error("Error fetching patients:", error);
    return [];
  }
};

export default GetPatients;