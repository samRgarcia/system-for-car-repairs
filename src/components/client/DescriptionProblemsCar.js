import React, {useContext} from "react";
import {RegisterCarProblems} from "../Context/ContextRegisterCarProblems";
import InputTextGeneric from "../common/InputTextGeneric";
import ButtonGeneric from "../common/ButtonGeneric";
import ProblemsList from "./ProblemsList";

const DescriptionProblemsCar = () => {
    const {
        problems,
        setProblems,
        listProblems,
        setListProblems
    } = useContext(RegisterCarProblems);
    const [descriptionItem,setDescriptionItem]= React.useState('');

    const handlChangeProblems = (evt) => {
        setProblems({
            ...problems,
            [evt.target.name]: evt.target.value
        })
    }
    const handlChangeProblemsItem = (evt) => {
        setDescriptionItem( evt.target.value)
    }

    const addItemListProblems = () => {
        setListProblems((preven)=>{
            preven = [...preven];
            let mutar = [{descriptions:descriptionItem}];
            return preven.concat(mutar)
        });
        setDescriptionItem('')
    }
console.log(listProblems )

    return (
        <form>
            <InputTextGeneric
                Name="descriptions"
                Label="Descriptions General"
                onChange={handlChangeProblems}
                value={problems.descriptions}
            />
            <InputTextGeneric
                Name="descriptions"
                Label="Problems"
                onChange={handlChangeProblemsItem}
                value={descriptionItem}
            />
            <ButtonGeneric
                disabled={descriptionItem ? false:true}
                Title="Agregar"
                onClick={addItemListProblems}
            />
            <ProblemsList lista={listProblems}/>
        </form>
    )

}
export default DescriptionProblemsCar;
