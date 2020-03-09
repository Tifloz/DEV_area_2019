import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom"
import AreaAppBar from "../components/AppBar";
import AreaFooter from "../components/Footer";
import api from "../api";
import DialogSelect from "../components/DialogSelect";

class CreateArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            getMore: false,
            actions: "",
            reactions: "",
            user: null,
            isLogged: true,
        };
    }

    componentDidMount() {
        api.getCurrentUser().then(res => {
            this.setState({
                user: res.data.user ? res.data.user : null,
                isLogged: true
            })
        }).catch(err => {
            alert(err.data.err);
            this.setState({
                isLogged: false
            })
        })
    }

    getMore = (e) => {
        this.setState({getMore : true});
    };

    handleValueChange = (e) => {
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        console.log(this.state);
        if (this.state.actions !== "" && this.state.reactions !== "") {
            api.createArea(localStorage.token, this.state.actions, this.state.reactions).then(r => {
                this.setState({getMore: true});
                alert('Area created');
            }).catch(err => {
                alert('Area creation failed');
            });
        } else {
            alert('Please submit value for action and reaction');
        }
    };

    render() {
        const { classes } = this.props;

        if (this.state.getMore)
            return <Redirect to={'/dashboard'}/>;

        if (!this.state.isLogged)
            return (<Redirect to={"/"}/>);

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
                                  onValueChange={this.handleValueChange}
                                  user={this.state.user}
                                />
                                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom className={classes.typo}>
                                    THEN
                                </Typography>
                                <DialogSelect
                                  value={"THAT"}
                                  type={"reactions"}
                                  onValueChange={this.handleValueChange}
                                  user={this.state.user}
                                />
                            </div>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" onClick={ this.getMore } className={classes.button} >
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" onClick={ this.handleSubmit }>
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