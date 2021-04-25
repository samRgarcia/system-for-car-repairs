import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import CardWork from "./CardWork";
import {ContextListAllWork} from "../../Context/ContextWorkList";
import axios from "axios";
import {GET_MY_ALL_JOBS} from "../../costants/urls";
import {ContextAuth} from "../../Context/ContextAuth";

const LisWork = () => {
    const {userAuth} = useContext(ContextAuth);
    const {listJobs,setList, isUpdate, setIsUpdate} = useContext(ContextListAllWork)

    useEffect(()=>{
        axios.get(GET_MY_ALL_JOBS,{params:{idMachinacal:userAuth.idClient}})
            .then((res)=>{
                setList(res.data)
                console.log(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
    },[isUpdate])

    return (<Grid container spacing={3}>
        {listJobs.map((item,index) => (
            <Grid key={index} item xs={12} sm={6}>
                <CardWork data={item}/>
            </Grid>
        ))}
    </Grid>)
}

export default LisWork;
