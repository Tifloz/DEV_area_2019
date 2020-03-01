import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom"
import AddIcon from '@material-ui/icons/AddBox';
import AreaAppBar from "../components/AppBar";
import AreaFooter from "../components/Footer";
import api from "../api";
import DialogSelect from "../components/DialogSelect";

class CreateArea extends React.Component {

    constructor(props) {
        super(props);
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
        if (!api.isAuth()) {
            return (<Redirect to={"/"}/>);
        }

        return (
            <React.Fragment>
                <CssBaseline/>
                <AreaAppBar classes={classes}/>
                <main>
                    {/* Hero unit */}
                    <div>
                        <Container maxWidth="sm" >
                            <Typography component="h1" variant="h2" align="center" className={classes.title} gutterBottom>
                                Create your own.
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Configure a new AREA
                            </Typography>
                            <div className={classes.bodyContent}>
                                <Typography component="h1" variant="h2"  color="textPrimary" gutterBottom className={classes.typo}>
                                    IF
                                </Typography>
                                <DialogSelect
                                  value={"THIS"}
                                  type={"actions"}
                                />
                                {/*<TransitionsModal value={"THIS"}/>*/}
                                {/*<Button*/}
                                {/*    align="left"*/}
                                {/*    startIcon={<AddIcon style={{ fontSize: '90px' }}/>}*/}
                                {/*    className={classes.typo}*/}
                                {/*>*/}
                                {/*    THIS*/}
                                {/*</Button>*/}
                                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom className={classes.typo}>
                                    THEN
                                </Typography>
                                <DialogSelect
                                  value={"THAT"}
                                  type={"reactions"}
                                />
                                {/*<TransitionsModal value={"THAT"}/>*/}
                                {/*<Button*/}
                                {/*    align="left"*/}
                                {/*    startIcon={<AddIcon style={{ fontSize: '90px' }}/>}*/}
                                {/*    className={classes.typo}*/}
                                {/*>*/}
                                {/*    THAT*/}
                                {/*</Button>*/}
                            </div>


                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" onClick={ this.getMore } className={classes.button} >
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" onClick={ this.getMore }>
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
                <AreaFooter classes={classes}/>
            </React.Fragment>
        );
    }
}

CreateArea.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (CreateArea);