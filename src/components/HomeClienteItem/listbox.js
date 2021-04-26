import React from "react";
import Grid from "@material-ui/core/Grid";
import CardRoutes from "./CardRoutes";
import Loyaut from "../Loyaut";

const ListModuleClient=[
    {name:"Register Problems",url:"/new-problem",descriptions:"Registre un nuevo problema, de su auto"},
    {name:"Current quote",url:"/all-price",descriptions:"Vea las propuestas de contizacion"},
    {name:"Car problem tracking ",url:"all-suggestions",descriptions:"Vea el seguimento de sus problemas motrizes"},
    {name:"History problems",url:"history-cliente",descriptions:"Historial de todos sus problemas"},
]

const ListBox =()=>{
    return(
        <Loyaut>
        <Grid container spacing={1}>
            {ListModuleClient.map((item,index) => (
                <Grid key={index} item xs={12} sm={5}>
                    <CardRoutes data={item}/>
                </Grid>
            ))}
        </Grid>
        </Loyaut>
    )
}

export default ListBox;
