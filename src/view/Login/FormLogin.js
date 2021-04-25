import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {useStyles} from "./makeStyle";
import TextFields from "../../components/common/TextFields";
import SelectRol from "./SelectRol";
import SelectGender from "./SelectGender";
import axios from "axios";
import {POST_SIGN_UP} from "../../components/costants/urls";
import Box from "@material-ui/core/Box";
/*
"name": "Sam",
        "last_name": "RIV",
        "first_name": "Gar",
        "gender": "H",
        "phone": "222222",
        "email": "pruebas",
        "user":"prueba",
        "password":"123",
        "rol":"client"

 */

const FormLogin = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isActive, setIsActive] = useState(false)

    const handlChange = async (data) => {
        console.log(data)
        setIsActive(true)
        await axios.post(POST_SIGN_UP, {
            name: data.name,
            last_name: data.last_name,
            first_name: data.first_name,
            gender: data.gender,
            phone: data.phone,
            email: data.email,
            user: data.user,
            password: data.password,
            rol: data.rol
        })
            .then((res) => {
                console.log(res)
                alert("Register correct")
                setIsActive(false)
                history.push("/sing")
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Formik
            initialValues={{
                user: '',
                password: '',
            }}
            validationSchema={Yup.object({
                user: Yup.string().required('User required'),
                password: Yup.string().required('Password required'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                //console.log(JSON.stringify(values, null, 2))
                handlChange(values);
                setSubmitting(false)
            }}>
            <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextFields label={"user"} name={"user"} type={"text"} placeholder=""/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFields label={"password"} name={"password"} type={"password"} placeholder=".."/>
                    </Grid>
                </Grid>

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link onClick={() => history.push('sing-up')} href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    )
}


export default FormLogin;
