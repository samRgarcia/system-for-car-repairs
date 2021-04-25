import React from "react";
import {Button} from '@material-ui/core';

const ButtonGeneric =({Title="Na",onClick,disabled = false})=>{
    return(
        <Button disabled={disabled} variant="contained" color="primary" onClick={onClick}>
            {Title}
        </Button>
    )
}

export default ButtonGeneric
