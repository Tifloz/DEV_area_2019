import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from "@material-ui/icons/AddBox";
import { createAreaStyles } from "../styles/styles";
import api from "../api";
import TwitterAuth from "../auth/TwitterAuth";

export default function DialogSelect(props) {
  const classes = createAreaStyles();
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState('');
  const [name, setName] = React.useState('');
  const [services, setServices] = React.useState(null);
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    api.getAllServices().then((res) => {
      setName(res.data.twitter.name);
      setServices(res.data.twitter);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  React.useEffect(() => {
    if (localStorage.twitter_token)
      setIsLogged(true);
    else
      setIsLogged(false);
  }, []);

  const handleChange = event => {
    setResult(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onTwitterSuccess = () => {
    setIsLogged(true);
  }

  let content;

  if (isLogged && services)
    content =
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel id="twitter_services">{props.type}</InputLabel>
          <Select
            labelId="twitter_services"
            id="twitter_services"
            value={result}
            onChange={handleChange}
            input={<Input />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={services[props.type][0].value}>{services[props.type][0].label}</MenuItem>
            <MenuItem value={services[props.type][1].value}>{services[props.type][1].label}</MenuItem>
          </Select>
        </FormControl>
      </form>;
  else
    content = <TwitterAuth handleSuccess={onTwitterSuccess}/>;

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
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          {content}
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