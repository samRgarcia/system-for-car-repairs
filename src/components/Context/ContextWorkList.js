import React, {createContext, useEffect, useState} from "react";

export const ContextListAllWork = createContext();

export const ProviderListAllWork = ({children}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [listJobs,setList]= useState([]);



    return (
        <ContextListAllWork.Provider value={{listJobs,setList, isUpdate, setIsUpdate}}>
            {children}
        </ContextListAllWork.Provider>
    )
}
