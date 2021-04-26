import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {useStyles} from "./makeStyle";
import TextFields from "../../components/common/TextFields";
import axios from "axios";
import {POST_SIGN} from "../../components/costants/urls";
import {ContextAuth} from "../../components/Context/ContextAuth";


const FormLogin = () => {
    const classes = useStyles();
    const {setUserAuth} = useContext(ContextAuth);
    const history = useHistory();
    const [isActive, setIsActive] = useState(false)

    const handlChange = async (data) => {
        setIsActive(true)
        await axios.post(POST_SIGN, {
            user: data.user,
            password: data.password,
        })
            .then((res) => {
                console.log(res.data)
                setUserAuth(res.data)
                setIsActive(false)
                if (res.data.rol === "Mechanical") {
                    history.replace("/home-mechanical")
                }else {
                    history.replace("/home-client")
                }
            })
            .catch((e) => {
                alert("Incorrect user or Incorrect password")
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
                    className={ `${classes.submit} animate__animated animate__fadeIn`}
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
