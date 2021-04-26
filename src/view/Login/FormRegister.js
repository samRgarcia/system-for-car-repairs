import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {useStyles} from "./makeStyle";
import TextFields from "../../components/common/TextFields";
import SelectRol from "./SelectRol";
import SelectGender from "./SelectGender";
import axios from "axios";
import {POST_SIGN_UP} from "../../components/costants/urls";


const FormRegister = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isActive,setIsActive]=useState(false)

    const handlChange = async (data) => {
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
                Swal.fire(
                    'Register correct',
                    '!',
                    'success'
                )
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
                name: '',
                last_name: '',
                first_name: '',
                gender: '',
                phone: '',
                email: '',
                user: '',
                password: '',
                rol: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('Name required'),
                first_name: Yup.string().required('First name required'),
                last_name: Yup.string().required('Last name required'),
                gender: Yup.string().required('Gender requerido'),
                phone: Yup.number().required('Phone required'),
                email: Yup.string().required('Email required'),
                user: Yup.string().required('User required'),
                password: Yup.string().required('Password required'),
                rol: Yup.string().required('Rol required'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                //console.log(JSON.stringify(values, null, 2))
                handlChange(values);
                setSubmitting(false)
            }}>
            <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextFields label={"name*"} name={"name"} type={"text"}
                                    placeholder=""/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextFields label={"first_name*"} name={"first_name"} type={"text"}
                                    placeholder=".."/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextFields label={"last_name*"} name={"last_name"}
                                    type={"text"}
                                    placeholder=""/>
                    </Grid>
                    <Grid item xs={12}>
                        <SelectGender label={"Gender"} name={"gender"}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFields label={"phone*"} name={"phone"} type={"text"}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextFields label={"email"} name={"email"}
                                    type={"text"}
                                    placeholder=".."/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFields label={"user"} name={"user"} type={"text"} placeholder=""/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextFields label={"password"} name={"password"} type={"password"} placeholder=".."/>
                    </Grid>
                    <Grid item xs={12}>
                        <SelectRol label={"Rol"} name={"rol"}/>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link onClick={() => history.push('sing')} href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Button
                    disabled={isActive}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
            </Form>
        </Formik>
    )
}


export default FormRegister;
