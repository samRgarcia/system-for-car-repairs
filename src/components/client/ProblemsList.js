import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListSubheader,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

export default function ProblemsList({lista=[{descriptions:"..."}]}) {
    const classes = useStyles();

    return (
        <List className={classes.root} subheader={<li />}>
            {lista.map((item,index) => (
                <List key={index} component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.descriptions} />
                    </ListItem>
                </List>
            ))}
        </List>
    );
}


