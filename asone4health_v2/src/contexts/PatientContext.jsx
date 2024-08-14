import React, {createContext, useContext, useState} from 'react'

const PatientContext = createContext()

export const PatientProvider = ({children}) => {

    const [selectedPatient, setSelectedPatient] = useState(null);
    



    return (
        <PatientContext.Provider value={{selectedPatient, setSelectedPatient}}>
            {children}
        </PatientContext.Provider>
    )

};

export const usePatient = () => {
    return useContext(PatientContext);
};