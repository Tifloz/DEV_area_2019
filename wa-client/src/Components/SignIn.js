import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab';

import React from 'react';

import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom'
import api from '../api'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    noAccountLink: {
        marginTop: theme.spacing(2),
    },
    errorAlert: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});

//const classes = useStyles();


class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            redirect: false,
            email: '',
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        console.log('submit auth')
        e.preventDefault();
        api.signin(this.state.username, this.state.password)
            .then((result) => {
                console.log(result)
                this.setState({redirect: true });
            }).catch((error) => {
                console.log(error)
                this.setState({errorMessage: 'Invalid username or password !'})
            });
    };

    render() {
        let errorM = <div> </div>;
        const { classes } = this.props;
        if (this.state.errorMessage)
            errorM = <Alert severity="error" className={classes.errorAlert}>{this.state.errorMessage}</Alert>;

        if (this.state.redirect) {
            //Affichage de la redirection
            return <Redirect to='/dashboard'/>;
        }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    className={classes.form}
                    id="main-signin"
                    onSubmit={this.onSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={this.onChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.onChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                    {errorM}
                    <Grid container className={classes.noAccountLink}>
                        <Grid item>
                            <Link href="/SignUp" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
        )
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
