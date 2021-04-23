import React from "react";
import {TextField} from '@material-ui/core';

const InputTextGeneric = ({Label="label"}) => {
    return(
        <TextField id="outlined-basic" label={Label} variant="outlined" />
    )
}

export default InputTextGeneric;
