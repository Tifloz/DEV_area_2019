import * as React from "react";
import {TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {AccountCircle} from "@material-ui/icons";


export default class Email extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={1} alignItems={"flex-end"} style={this.props.style}>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              required
              error={this.props.error}
              helperText={this.props.error ? 'Adresse email invalide' : ''}
              name={'email'}
              label={'Adresse mail'}
              value={this.props.value}
              onChange={(event) => {this.props.onChange(event.target.value)}}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}