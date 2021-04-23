import React,{useContext} from "react";
import {RegisterCarProblems} from "../Context/ContextRegisterCarProblems";
import InputTextGeneric from "../common/InputTextGeneric";


const RegisterFormCar=()=>{
const {registerProblems,setRegisterProblems} = useContext(RegisterCarProblems)

 const handlChange =(evt)=>{
     setRegisterProblems({
         ...registerProblems,
         [evt.target.name]:evt.target.value
     })
 }
    return(
        <form>
            <InputTextGeneric
                Label="Model"
                Name="model"
                onChange={handlChange}
                value={registerProblems.model}
            />
            <InputTextGeneric
                Label="License place"
                Name="license_place"
                onChange={handlChange}
                value={registerProblems.license_place}
            />
        </form>
    )

}
export default RegisterFormCar;
