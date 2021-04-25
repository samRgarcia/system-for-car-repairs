import React, {createContext, useState} from "react";

export const ContextJobsList = createContext();

export const ProviderListJobs = ({children}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [listProbles,setProblems] =useState([]);

    return (
        <ContextJobsList.Provider value={{listProbles,setProblems, isUpdate, setIsUpdate}}>
            {children}
        </ContextJobsList.Provider>
    )
}
