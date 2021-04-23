import React from 'react';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
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

export default function CardRoutes(props) {
    const classes = useStyles();
    const history = useHistory();
    const bull = <span className={classes.bullet}>•</span>;

    const pushRoutes = (url) => {
        history.push(url)
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.data.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    ...
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>pushRoutes(props.data.url)}>Start</Button>
            </CardActions>
        </Card>
    );
}
