import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormModalSolutions from "./FormModalSolution";
import ListItemProblems from "./ListItemProblems";
import axios from "axios";
import {GET_ITEM_PROBLEMS} from "../../costants/urls";

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

export default function CardJobs(props) {
    const classes = useStyles();
    const [isForm, setIsForm] = useState(false);
    const [seeMore, setSeeMore] = useState('');
    const [open, setOpen] = React.useState(false);
    const [listItem, setListItem] = useState([]);

    const handeChange = (data) => {
        console.log(data)
        setIsForm(!isForm);
        setSeeMore(data)
    }

    const seeMoreDetails = async (idProblems) => {
        console.log(idProblems)
        axios.get(GET_ITEM_PROBLEMS, {params: {idMachinacal: idProblems}})
            .then((res) => {
                setListItem(res.data)
                setOpen(true)
            }).catch((e) => {
            console.log(e)
        })

    }

    return (
        <React.Fragment>
            <FormModalSolutions
                isForm={isForm}
                setIsForm={setIsForm}
                seeMore={seeMore}
            />
            <ListItemProblems data={listItem} open={open} setOpen={setOpen}/>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${props.data.model_cars} -${props.data.license_place_cars}`}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {`${props.data.name} ${props.data.first_name} ${props.data.last_name}`}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Client
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.data.descriptions}
                        <br/>
                        {`Status: ${props.data.status}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handeChange(props.data)}>Suggestions</Button>
                    <Button size="small" onClick={() => seeMoreDetails(props.data.idmechanical_problems)}>see
                        more</Button>

                </CardActions>
            </Card>
        </React.Fragment>
    );
}
