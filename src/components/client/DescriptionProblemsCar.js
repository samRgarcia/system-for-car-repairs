import React from "react";
import InputTextGeneric from "../common/InputTextGeneric";
import ButtonGeneric from "../common/ButtonGeneric";
import ProblemsList from "./ProblemsList";

const DescriptionProblemsCar=()=>{
    return(
        <form>
            <InputTextGeneric Label="Descriptions General"/>
            <InputTextGeneric Label="Problems"/>
             <ButtonGeneric Title="Agregar"/>
             <ProblemsList/>
        </form>
    )

}
export default DescriptionProblemsCar;
