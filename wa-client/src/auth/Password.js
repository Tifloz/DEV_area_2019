import * as React from "react";
import {TextField} from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';
import Grid from "@material-ui/core/Grid";


export default class Password extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={1} alignItems={'flex-end'} style={this.props.style}>
          <Grid item>
            <LockIcon/>
          </Grid>
          <Grid item>
            <TextField
              required
              error={this.props.error}
              helperText={this.props.error ? 'Le mot de passe doit être de 6 caractères minimum' : ''}
              name={'password'}
              label={'Mot de passe'}
              type={'password'}
              value={this.props.value}
              onChange={(event) => {this.props.onChange(event.target.value)}}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}