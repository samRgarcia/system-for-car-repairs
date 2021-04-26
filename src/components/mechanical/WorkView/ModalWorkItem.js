import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ModalWorkItem({children, isForm = false, setIsForm, Title = "", Descriptions = "Other details",data, onClick = ()=>{}}) {

    const handleClose = () => {
        setIsForm(false);
    };

    /*const handlOnclik = (data) => {
        onClick(data)
        setIsForm(false);
    }*/

    return (
        <div>
            <Dialog open={isForm} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{Title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {Descriptions}
                    </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    {/*<Button onClick={() => handlOnclik(data)} color="primary">
                        Subscribe
                    </Button>*/}
                </DialogActions>
            </Dialog>
        </div>
    );
}
