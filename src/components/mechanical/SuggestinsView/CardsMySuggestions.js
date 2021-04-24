import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import {REGISTER_START_JOB} from "../../costants/urls";

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

function CardsMySuggestions(props) {
    const classes = useStyles();
    const initaliWork = async (data) => {
        //advance, cars_idcars,mechanical_idmechanical
        console.log(data)
        await axios.post(REGISTER_START_JOB, {
            idCar: data.cars_idcars,
            idMechanical: 1
        })
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {`${props.data.model} -${props.data.license_place}`}
                </Typography>
                <Typography variant="h5" component="h2">
                    {`${props.data.name} ${props.data.first_name} ${props.data.last_name}`}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Mechanical
                </Typography>
                <Typography variant="body2" component="p">
                    {props.data.suggestions}
                    <br/>
                    {`$ ${props.data.price}`}
                </Typography>
                <Typography variant="body2" component="p">

                    {`Status: ${props.data.status}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    disabled={props.data.status === "approved" ? false : true}
                    onClick={() => initaliWork(props.data)}
                >start work</Button>

            </CardActions>
        </Card>
    );
}

export default CardsMySuggestions;
