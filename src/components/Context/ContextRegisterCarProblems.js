import React, {createContext, useState} from "react";

export const RegisterCarProblems = createContext();
let initialRegisterProblems={
    model: "",
    license_place: "",
    client_idclient: "",
}
let initialProblems ={
    descriptions: ""
}

export const ProviderRegisterCarProblems = ({children}) => {
    const [registerProblems, setRegisterProblems] = useState(initialRegisterProblems);

    const [problems, setProblems] = useState(initialProblems);

    const [listProblems, setListProblems] = useState([initialProblems]);

    const restData = () => {
        setRegisterProblems(initialRegisterProblems);
        setProblems(initialProblems);
        setListProblems([initialProblems])
    }

    return (
        <RegisterCarProblems.Provider value={{
            registerProblems,
            setRegisterProblems,
            problems,
            setProblems,
            listProblems,
            setListProblems,
            restData
        }}>
            {children}
        </RegisterCarProblems.Provider>
    )
}
