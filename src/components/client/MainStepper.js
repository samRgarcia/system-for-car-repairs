import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";
import {RegisterCarProblems} from "../Context/ContextRegisterCarProblems";
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RegisterFormCar from "./RegisterFormCar";
import DescriptionProblemsCar from "./DescriptionProblemsCar";
import {REGISTER_NEW_PROBLEMS} from "../costants/urls";
import Loading from "../common/Loading";
import {ContextAuth} from "../Context/ContextAuth";
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Register car', 'Record mechanical problems', 'Send'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <RegisterFormCar/>;
        case 1:
            return <DescriptionProblemsCar/>;
        case 2:
            return <DetailSend/>;
        default:
            return 'Unknown step';
    }
}

function DetailSend() {
    return (
        <Container maxWidth="sm" style={{
            height: '500px',
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            backgroundColor: "white",
            padding: "32px"
        }}>
            <h2>Enviar esta informacion</h2>
        </Container>
    )
}

export default function MainStepper() {
    const classes = useStyles();
    const history = useHistory();
    const {userAuth} = useContext(ContextAuth)
    const {registerProblems, problems, listProblems, restData} = useContext(RegisterCarProblems)
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [isLoading, setIsLoading] = useState(false);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const sendProblems = async () => {
        //Todo: execute fetche method
        setIsLoading(true)
        await axios.post(REGISTER_NEW_PROBLEMS, {
            registerProblems,
            problems,
            listProblems,
            client_idclient: userAuth.idClient
        }).then((res) => {
            console.log(res)
            Swal.fire(
                'Registration done!',
                '',
                'success'
            )
            restData()
            history.push('/home-client')
        }).catch((e) => {
            console.log(e)
            alert("service not available")
        }).finally(() => {
            setIsLoading(false)
        })

        console.log("send")
    }

    return (
        <React.Fragment>
            <Loading open={isLoading}/>
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>
                                {activeStep === steps.length - 1 ?
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={sendProblems}
                                        className={classes.button}
                                        disabled={isLoading}
                                    >
                                        Save problems
                                    </Button> :
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        Next
                                    </Button>}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}
