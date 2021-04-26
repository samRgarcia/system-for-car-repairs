import React from "react";
import Grid from "@material-ui/core/Grid";
import WorkIcon from '@material-ui/icons/Work';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CardRoutes from "./CardRoutes";
import Loyaut from "../Loyaut";

const ListModuleClient=[
    {name:"Register Problems",url:"/new-problem",descriptions:"Register a new problem, of your car",icon:<FiberNewIcon/>},
    {name:"Current quote",url:"/all-price",descriptions:"See the proposals for contization",icon:<MonetizationOnIcon/>},
    {name:"Car problem tracking ",url:"all-suggestions",descriptions:"See the follow-up of your motor problems",icon:<EqualizerIcon/>},
    {name:"History problems",url:"history-cliente",descriptions:"History of all your problems",icon:<WorkIcon/>},
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
