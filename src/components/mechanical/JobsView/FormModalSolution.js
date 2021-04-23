import React from 'react';
import ModalGeneric from "../../common/ModalGeneric";
import InputTextGeneric from "../../common/InputTextGeneric";

const FormModalSolutions = ({isForm, setIsForm, seeMore, setSeeMore}) => {
    const sendSuggestions = (data) => {
            console.log(data)
    }

    return (
        <ModalGeneric
            isForm={isForm}
            setIsForm={setIsForm}
            Title={seeMore?.model_cars}
            Descriptions={seeMore?.descriptions}
            data={seeMore}
            onClick={sendSuggestions}
        >
            <form>
                <InputTextGeneric Label="Solutions"/>
                <InputTextGeneric Label="$ price"/>
            </form>
        </ModalGeneric>

    )
}

export default FormModalSolutions;
