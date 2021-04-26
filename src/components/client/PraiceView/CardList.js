import React, {useContext} from 'react';
import Swal from "sweetalert2";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import {UPDATE_ACCEPTED_SUGGESTION, UPDATE_DENY_JOB} from "../../costants/urls";
import {ContextListAllPrice} from "../../Context/ContextLisAllPrice";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CardList(props) {
    const classes = useStyles();
    const {isUpdate, setIsUpdate} = useContext(ContextListAllPrice);

    const acceptProblems = async (idProblemsSuggestions) => {
        console.log(idProblemsSuggestions)
        await sendApproval(idProblemsSuggestions)
    }

    const sendApproval = async (idProblemsSuggestions) => {
        await axios.put(UPDATE_ACCEPTED_SUGGESTION, {idSuggestion: idProblemsSuggestions})
            .then((res) => {
                Swal.fire(
                    'Approved quote',
                    '',
                    'success'
                )
                setIsUpdate(!isUpdate)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const sentDenySotilution = async (idProblemsSuggestions) => {
        await axios.put(UPDATE_DENY_JOB, {idmechanic_suggestions: idProblemsSuggestions})
            .then((res) => {
                Swal.fire(
                    'rejected quotation',
                    '',
                    'error'
                )
                setIsUpdate(!isUpdate)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Card className={`${classes.root} animate__animated animate__bounce`}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {`${props.data.model} -${props.data.license_place}`}
                </Typography>
                <Typography variant="h5" component="h2">
                    {`${props.data.name?.toUpperCase()} ${props.data.first_name?.toUpperCase()} ${props.data.last_name?.toUpperCase()}`}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {`Mechanical - Phone: ${props.data.phone}`}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.data.suggestions}
                    <br/>
                    {`$ ${props.data.price}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => acceptProblems(props.data.idmechanic_suggestions)}
                    disabled={props.data.status === "progress" ? true : false}
                >Acept</Button>
                <Button onClick={()=>sentDenySotilution(props.data.idmechanic_suggestions)} size="small">deny</Button>
            </CardActions>
        </Card>
    );
}
