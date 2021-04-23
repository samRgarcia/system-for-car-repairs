import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

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
            {lista.map((item) => (
                <li key={`section-${item.descriptions}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>{`List problems ${item.descriptions}`}</ListSubheader>
                    </ul>
                </li>
            ))}
        </List>
    );
}

