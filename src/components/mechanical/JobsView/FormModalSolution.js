import React, {useContext, useState} from 'react';
import ModalGeneric from "../../common/ModalGeneric";
import InputTextGeneric from "../../common/InputTextGeneric";
import axios from "axios";
import Swal from 'sweetalert2';
import {REGISTER_SUGGEST} from "../../costants/urls";
import {ContextJobsList} from "../../Context/ContextListJob";
import {ContextAuth} from "../../Context/ContextAuth";
import {Grid} from "@material-ui/core";

const FormModalSolutions = ({isForm, setIsForm, seeMore, setSeeMore}) => {
    const {userAuth} = useContext(ContextAuth);
    const {isUpdate, setIsUpdate} = useContext(ContextJobsList)
    const [state, setState] = useState({
        solution: "",
        price: ""
    })

    const handlChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value
        })
    }

    const sendSuggestions = (data) => {
        console.log(data)
        console.log(state)
        executeShipment(data)
    }

    const executeShipment = async (data) => {
        await axios.post(REGISTER_SUGGEST, {
            suggestions: state.solution,
            price: state.price,
            idCard: data.idcars,
            mechanicalStaff: userAuth.idClient
        })
            .then((res) => {
                console.log(res)
                Swal.fire(
                    'Suggestion sent',
                    '',
                    'success'
                )
                setIsUpdate(!isUpdate)
            })
            .catch((e) => {
                console.log(e)
            })
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
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12} >
                        <InputTextGeneric
                            Name="solution"
                            Label="Solutions"
                            value={state.solution}
                            onChange={handlChange}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <InputTextGeneric
                            Name="price"
                            Label="$ price"
                            value={state.price}
                            onChange={handlChange}
                        />
                    </Grid>
                </Grid>
            </form>
        </ModalGeneric>

    )
}

export default FormModalSolutions;
