import {BASE_URL} from "../Config";

const GetPatientsNames = (data) => {
  const names = data.map((patientArray) => {
    const patientData = patientArray[0]; 
    const family = patientData.family;
    const given = patientData.given ? patientData.given.join(' ') : '';
    return `${given} ${family}`.trim();
  });

  return [...new Set(names)];
};



const GetPatientsNamesArray = (data) =>{
 
    const patients_names = data.map((patient) => {
        return patient.name;
    });

    return [...new Set(patients_names)];

};


const GetPatients = async (doc_id) => {

    try {

        const response = await fetch(`${BASE_URL}/doctor/activated_patients/${doc_id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);  
          }

          const data = await response.json();
          const names_array =  GetPatientsNamesArray(data);
          //return names_array;
          return GetPatientsNames(names_array);
    }

    catch(error){
        console.error("Error fetching patients:", error);
        return [];
    }
}

export default GetPatients;