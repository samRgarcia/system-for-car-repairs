import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import {UPDATE_ACCEPTED_JOB, UPDATE_DENY_JOB} from "../../costants/urls";

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

export default function CardSuggestions({data}) {
    const classes = useStyles();

    const acceptedProblems = async ({idmechanic_suggestions}) => {
        console.log('idmechanic_suggestions', idmechanic_suggestions)
        await sendActions(UPDATE_ACCEPTED_JOB, idmechanic_suggestions)

    }

    const denyProblems = async ({idmechanic_suggestions}) => {
        console.log('idmechanic_suggestions', idmechanic_suggestions)
        await sendActions(UPDATE_DENY_JOB, idmechanic_suggestions)
    }

    const sendActions = async (URL, id) => {
        await axios.put(URL, {idmechanic_suggestions: id})
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
                    {`${data.model} - ${data.license_place}`}
                </Typography>
                <Typography variant="h5" component="h2">
                    {`${data.name} ${data.first_name} ${data.last_name} `}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Mechanical
                </Typography>
                <Typography variant="body2" component="p">
                    {data.descriptions}
                </Typography>
                <Typography variant="body2" component="p">
                    Status:{data.advance}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    disabled={data.advance === "finish" ? false : true}
                    onClick={() => acceptedProblems(data)}
                >Accepted</Button>
                <Button
                    size="small"
                    disabled={data.advance === "finish" ? false : true}
                    onClick={() => denyProblems(data)}
                >Deny</Button>
            </CardActions>
        </Card>
    );
}
