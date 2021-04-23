import React, {createContext, useState} from "react";

export const RegisterCarProblems = createContext();

export const ProviderRegisterCarProblems = ({children}) => {
    const [registerProblems, setRegisterProblems] = useState({
        model: "v",
        license_place: "",
        client_idclient: 1,
    });

    const [problems, setProblems] = useState({
        descriptions:""
    });

    const [listProblems, setListProblems] = useState([{
        descriptions:""
    }]);

    return (
        <RegisterCarProblems.Provider value={{
            registerProblems,
            setRegisterProblems,
            problems,
            setProblems,
            listProblems,
            setListProblems
        }}>
            {children}
        </RegisterCarProblems.Provider>
    )
}
