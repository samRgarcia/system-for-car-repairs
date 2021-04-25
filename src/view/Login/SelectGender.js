import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useField} from "formik";
import {FormHelperText} from "@material-ui/core";

const SelectGender = ({label = '', ...props}) => {
    const [field, meta] = useField(props);
    return (
        <FormControl variant={"outlined"} style={{marginLeft:'5px'}} fullWidth error={meta.touched && meta.error ? true:false}>
            <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
            <Select
                native
                {...field}
                {...props}
            >
                <option aria-label="None" value=""/>
                <option value={'W'}>Woman</option>
                <option value={'M'}>Man</option>
            </Select>
            <FormHelperText>{meta.touched && meta.error ? meta.error:null}</FormHelperText>
        </FormControl>
    )
}

export default SelectGender;
