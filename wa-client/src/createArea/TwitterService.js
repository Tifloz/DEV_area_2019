import React from "react";
import api from "../api";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import TwitterAuth from "../auth/TwitterAuth";
import {createAreaStyles} from "../styles/styles";

export default function TwitterService(props) {
  const classes = createAreaStyles();
  const [isLogged, setIsLogged] = React.useState(false);
  const [services, setServices] = React.useState(null);
  const [result, setResult] = React.useState('');
  let count = 0;

  React.useEffect(() => {
    if (props.user && props.user.twitter_token !== "") {
      console.log(props.user);
      setIsLogged(true);
      api.getAllServices().then((res) => {
        // setName(res.data.twitter.name);
        console.log(res);
        setServices(res.data.twitter);
      }).catch((err) => {
        console.log(err)
      })
    } else
      setIsLogged(false)
  }, [props.user]);

  const onTwitterSuccess = () => {
    setIsLogged(true);
  };

  const handleChange = event => {
    setResult(event.target.value);
    props.onValueChange(event)
  };

  if (isLogged && services)
    return (
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel id="twitter_services">{props.type}</InputLabel>
          <Select
            labelId="twitter_services"
            id="twitter_services"
            name={props.type}
            value={result}
            onChange={handleChange}
            input={<Input />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            { Object.keys(services[props.type]).map(key => (
              <MenuItem key={count++} value={services[props.type][key].value}>{services[props.type][key].label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  else
    return (<TwitterAuth handleSuccess={onTwitterSuccess}/>);
}