import React from 'react';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

export default function HomeMechanical({url}) {
    const classes = useStyles();
    const history = useHistory()

    function handleClick(url) {
        history.replace(url)
    }

    return (
        <Breadcrumbs aria-label="breadcrumb" color={"while"}>
            <Link color="secondary"  onClick={() => handleClick(url)} className={classes.link}>
                <HomeIcon className={classes.icon}/>
                Home
            </Link>
        </Breadcrumbs>
    );
}
