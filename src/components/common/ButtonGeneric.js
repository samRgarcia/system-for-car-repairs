import React from "react";
import {Button} from '@material-ui/core';

const ButtonGeneric =({Title="Na"})=>{
    return(
        <Button variant="contained" color="primary">
            {Title}
        </Button>
    )
}

export default ButtonGeneric
