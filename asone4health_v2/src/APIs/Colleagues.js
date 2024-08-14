import { BASE_URL } from "../Config";
//import { useAuth } from "../contexts/AuthProvider";

const GetAcceptedColleagues = (all_doctors) => {
  return all_doctors.filter((doctor) => doctor.colleague.status === "accepted");
};

const GetColleaguesNames = (accepted_colleagues) => {
  const colleagues_names = accepted_colleagues.map((colleague) => {
    return colleague.colleague.lastName;
  });
  return [...new Set(colleagues_names)];
};

const ColleaguesExtraction = async (doc_id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/get_invitations_colleagues_status_by_doctor/${doc_id}`,
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
    const all_colleagues = GetAcceptedColleagues(data);
    //return all_colleagues;
    return GetColleaguesNames(all_colleagues);
  } catch (error) {
    console.error("Error fetching collegues:", error);
    return [];
  }
};

export default ColleaguesExtraction;
