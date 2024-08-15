import { BASE_URL } from "../Config";

const ExtractMedicalInformation = (data) => {
    const allergies = data.content.llergies;
    const antecedents = data.content.antecedents;
    const medicaments =data.content.medicaments;
    const interventions = data.content.interventions;
    return [allergies, antecedents, medicaments, interventions] ;

};


const GetMedicalInformation = async (patient_id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/get_patient_medical_informations/${patient_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
//return data;
//displaying the data
    return ExtractMedicalInformation(data);

  } catch (error) {
    console.error("Error fetching collegues:", error);
    return [];
  }
};

export default GetMedicalInformation;
