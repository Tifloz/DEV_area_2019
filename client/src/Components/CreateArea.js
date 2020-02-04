import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom"
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/AddBox';

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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 4),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    bodyContent: {
        marginRight: '50.00%',
        marginTop: '20.00%',
        //display: 'flex',
        //flexDirection: 'column',
        //justifyContent: 'flex-start',
        //backgroundColor: 'rgba(0,0,0,0.07)'
        // TODO icone = add_box

    },
    typo: {
        fontSize: '6.0em',
        fontWeight: 'bolder',
        fontFamily: 'helvetica',
    },
    typoSelected: {
        fontSize: '6.0em',
        fontWeight: 'bolder',
        fontFamily: 'helvetica',
        opacity: '0.5',
    }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class CreateArea extends React.Component {

    constructor() {
        super();
        this.state = {
            getMore: false,
        };
    }

    getMore = (e) => {
        this.setState({getMore : true});
    };

    render() {
        const { classes } = this.props;

        if (this.state.getMore) {
            return <Redirect to='/dashboard'/>;
        }

        return (
            <React.Fragment>
                <CssBaseline/>
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            AREA
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Create your own.
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Configure a new AREA
                            </Typography>
                            <div className={classes.bodyContent}>
                                <Typography component="h1" variant="h2"  color="textPrimary" gutterBottom className={classes.typo}>
                                    IF
                                </Typography>
                                <Button
                                    align="left"
                                    startIcon={<AddIcon style={{ fontSize: '90px' }}/>}
                                    className={classes.typo}
                                >
                                    THIS
                                </Button>
                                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom className={classes.typo}>
                                    THEN
                                </Typography>
                                <Button
                                    align="left"
                                    startIcon={<AddIcon style={{ fontSize: '90px' }}/>}
                                    className={classes.typo}
                                >
                                    THAT
                                </Button>
                            </div>


                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary" onClick={ this.getMore }>
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="success" onClick={ this.getMore }>
                                            Validate
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Coucou ceci est un footer
                    </Typography>
                    <Copyright/>
                </footer>
                {/* End footer */}
            </React.Fragment>
        );
    }
}

CreateArea.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateArea);