import React, {useContext, useEffect} from "react";
import CardJobs from "./CardJobs";
import Grid from "@material-ui/core/Grid";
import {ContextJobsList} from "../../Context/ContextListJob";
import axios from "axios";
import {GET_MECHANICAL_PROBLEMS} from "../../costants/urls";

const ListJobs =()=>{
    const {listProbles,setProblems, isUpdate, setIsUpdate} = useContext(ContextJobsList)

    useEffect(()=>{
        axios.get(GET_MECHANICAL_PROBLEMS)
            .then((res)=>{
                console.log(res.data)
                setProblems(res.data)
            })
            .catch((e)=>{
                console.log(e)
            })
    },[isUpdate])

    return(
        <Grid container spacing={3}>
            {listProbles.map(item => (
                <Grid item xs={12} sm={6}>
                    <CardJobs data={item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default ListJobs;
