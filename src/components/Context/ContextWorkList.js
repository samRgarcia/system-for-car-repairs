import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import { GET_MY_ALL_JOBS} from "../costants/urls";

export const ContextListAllWork = createContext();

export const ProviderListAllWork = ({children}) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [listJobs,setList]= useState([]);

    useEffect(()=>{
        axios.get(GET_MY_ALL_JOBS,{params:{idMachinacal:1}})
            .then((res)=>{
                setList(res.data)
                console.log(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
    },[isUpdate])

    return (
        <ContextListAllWork.Provider value={{listJobs,setList, isUpdate, setIsUpdate}}>
            {children}
        </ContextListAllWork.Provider>
    )
}
