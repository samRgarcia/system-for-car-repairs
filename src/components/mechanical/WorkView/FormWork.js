import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ModalWorkItem from "./ModalWorkItem";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FormWork({isForm, setIsForm, data = [], setData}) {
    const classes = useStyles();

    /*const handleToggle = (value) => () => {
        value.progress = "initial" ? true : false
        const dataUpdate = [...data];
        const index = value.idlist_problems;
        dataUpdate[index] = value;
        setData([...dataUpdate])
    };*/

console.log(data)
    return (
        <ModalWorkItem isForm={isForm} setIsForm={setIsForm}>
            <List className={classes.root}>
                {data.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={value.description} role={undefined} dense button >
                            <ListItemIcon>
                                <ArrowForwardIosIcon/>
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value.description}`}/>
                        </ListItem>
                    );
                })}
            </List>
        </ModalWorkItem>
    );
}
