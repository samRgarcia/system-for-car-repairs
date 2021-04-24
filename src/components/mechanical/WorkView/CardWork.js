import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormWork from "./FormWork";
import axios from "axios";
import {GET_ITEM_PROBLEMS, UPDATE_FINISH_JOB} from "../../costants/urls";

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

export default function CardWork(props) {
    const classes = useStyles();
    const [isForm, setIsForm] = useState(false);
    const [itemProblems, setItemProblems] = useState([]);

    const dataItemId = async (idProblemsItem) => {
        await axios.get(GET_ITEM_PROBLEMS, {params: {idMachinacal: idProblemsItem}})
            .then((res) => {
                console.log(res.data)
                setItemProblems(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const handlOpenModal = async (idProblems) => {
        console.log(idProblems)
        await dataItemId(idProblems).then(() => setIsForm(!isForm));
    }
    const finishWork = async (idjobs_started) => {
        //idjobs_started
          await  axios.put(UPDATE_FINISH_JOB,{
                idjobs_started:idjobs_started
            })
              .then((res)=>{
                  console.log(res)
              })
              .catch((e)=>{
                  console.log(e)
              })
    }

    return(<React.Fragment>
            <FormWork isForm={isForm} setIsForm={setIsForm} data={itemProblems} setData={setItemProblems}/>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {`${props.data.model} -${props.data.license_place}`}
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
                        {`$ ${props.data.price}`}
                    </Typography>
                </CardContent>
                <CardActions>
                    {props.data.advance==="finish" ?
                        <h1>Terminado</h1>:
                        <>
                            <Button onClick={() => handlOpenModal(props.data.idmechanical_problems)}
                             size="small">Options</Button>
                        <Button
                        onClick={() => finishWork(props.data.idjobs_started)}
                        size="small">finish</Button>
                        </>}
                </CardActions>
            </Card>
        </React.Fragment>
    );
}
