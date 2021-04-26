import React from "react";
import {TextField} from '@material-ui/core';

const InputTextGeneric = ({Name,Label="label",value, onChange}) => {
    return(
        <TextField
            fullWidth
            name={Name}
            id="outlined-basic"
            label={Label}
            variant="outlined"
            value={value}
            onChange={onChange}
        />
    )
}

export default InputTextGeneric;
