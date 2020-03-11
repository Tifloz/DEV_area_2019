import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from "@material-ui/icons/AddBox";
import { createAreaStyles } from "../styles/styles";
import TwitterService from "../CreateArea/TwitterService";

export default function DialogSelect(props) {
  const classes = createAreaStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        align="left"
        startIcon={<AddIcon style={{ fontSize: '90px' }}/>}
        onClick={handleClickOpen}
        className={classes.typo}
      >
        {props.value}
      </Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{props.type}</DialogTitle>
        <DialogContent>
          <TwitterService
            user={props.user}
            type={props.type}
            onValueChange={props.onValueChange}
          />
        </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleClose} color="primary">
        Ok
      </Button>
    </DialogActions>
        </Dialog>
      </div>
  );
}