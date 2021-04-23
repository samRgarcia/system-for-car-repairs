import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    { `${data.model} - ${data.license_place}` }
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
                <Button size="small">Ap</Button>
            </CardActions>
        </Card>
    );
}
