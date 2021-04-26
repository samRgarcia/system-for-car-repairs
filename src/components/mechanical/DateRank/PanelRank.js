import React, {useContext, useState} from "react";
import DateInput from "./DateInput";
import {Button, Grid} from "@material-ui/core";
import InputTextGeneric from "../../common/InputTextGeneric";
import axios from "axios";
import {GET_DATE_RANKS} from "../../costants/urls";
import ListRank from "./ListRank";
import {ContextAuth} from "../../Context/ContextAuth";


const PanelRank = () => {
    const {userAuth} = useContext(ContextAuth);
    const [selectedDate, setSelectedDate] = React.useState({
        start: new Date(),
        end: new Date()
    });
    const [amount, setAmout] = useState(0);
    const [state, setState] = useState([]);

    const getAmountStartEnd = async () => {
        await axios.get(GET_DATE_RANKS, {
            params: {
                idMechanic: userAuth.idClient,
                dateStart: selectedDate.start,
                dateEnd: selectedDate.end
            }
        })
            .then((res) => {
                console.log(res.data)
                res.data.length && runSum(res.data)
                setState(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const runSum = (data = []) => {
        let sum = 0;
        for (let index = 0; index < data.length; index++) {
            sum = sum + parseFloat(data[index].price)
        }
        setAmout(sum)
    }

    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                spacing={2}
            >
                    <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                <Grid item xs={12}>
                    <ListRank listData={state}/>
                </Grid>
                <Grid item xs={12}>
                    <InputTextGeneric Label={"Total amount"} value={amount}/>
                </Grid>

            <Button variant={"contained"} onClick={getAmountStartEnd}>Aplication</Button>
            </Grid>
        </React.Fragment>
    )
}
export default PanelRank;
