import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useField} from "formik";


export default function TextFields({label = '', ...props}) {
    const [field, meta] = useField(props);
    //const [error, setError] = React.useState(false)
   // const fieldValue = {...field, value: props?.toUpperCase() ? field.value.toUpperCase() : field.value}
    return (
        <>
            <TextField
                variant="outlined"
                InputLabelProps={{shrink: true}}
                style={{marginLeft: '5px'}}
                fullWidth
                error={meta.touched && meta.error ? true : false}
                label={label}
                {...field}
                {...props}
                helperText={meta.touched && meta.error ? meta.error : null}
            />
        </>
    );
}
