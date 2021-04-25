import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import { GET_MECHANICAL_PROBLEMS} from "../costants/urls";

export const ContextJobsList = createContext();

export const ProviderListJobs = ({children}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [listProbles,setProblems] =useState([]);

    useEffect(()=>{
        axios.get(GET_MECHANICAL_PROBLEMS)
            .then((res)=>{
                console.log(res.data)
                setProblems(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
    },[isUpdate])

    return (
        <ContextJobsList.Provider value={{listProbles,setProblems, isUpdate, setIsUpdate}}>
            {children}
        </ContextJobsList.Provider>
    )
}
