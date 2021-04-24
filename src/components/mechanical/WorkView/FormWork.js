import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ModalWorkItem from "./ModalWorkItem";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FormWork({isForm, setIsForm, data = [],setData}) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        value.progress="initial" ? true:false
        console.log(value,"value")
        const dataUpdate=[...data];
        const index = value.idlist_problems;
        dataUpdate[index] = value;
        console.log(dataUpdate[index],"update")
        setData([...dataUpdate])
    };

    return (
        <ModalWorkItem isForm={isForm} setIsForm={setIsForm}>
            <List className={classes.root}>
                {data.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                        <ListItem key={value.description} role={undefined} dense button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={value.progress}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value.description}`}/>
                        </ListItem>
                    );
                })}
            </List>
        </ModalWorkItem>
    );
}
