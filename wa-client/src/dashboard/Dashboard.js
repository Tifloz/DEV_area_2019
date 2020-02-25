import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PropTypes from "prop-types";
import api from "../api";
import {forEachChild} from "typescript";
import {Redirect} from "react-router-dom";
import Copyright from "../components/Copyright";
import Box from "@material-ui/core/Box";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            areas: [],
            cards: [],
            createArea: false,
        };
    }


    componentDidMount = () => {
        let responseStatus = false;
        api.getAreasByUserId().then(function(result) {
            return result
        }).then((result) => {
            let data = [];
            let cards_tmp = [];
            let idx = 0;
            result.data.forEach((item) => {
                data.push(item);
                cards_tmp.push(idx);
                idx = idx + 1;
            });
            this.setState({
                areas: data,
                cards: cards_tmp,
            });
            console.log("DATA ===>" + this.state.areas[0].img)
        });
    };

    handleRedirect = () => {
        console.log('handleRedirect');
        this.setState({
            createArea: true,
        })
    };

    render = () => {
        const { classes } = this.props;
        let default_img = "https://previews.123rf.com/images/boxerx/boxerx1611/boxerx161100008/68882650-t%C3%A9l%C3%A9charger-le-signe-sur-fond-transparent-charger-l-ic%C3%B4ne-barre-de-chargement-de-donn%C3%A9es-stock-vector-il.jpg";
        if (this.state.createArea)
            return (<Redirect to={"/createArea"}/>);
        return (
            <React.Fragment>
                <CssBaseline/>
                <AppBar position="relative" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" style={{fontWeight: 900}} color="inherit" noWrap>
                            AREA
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title}>
                                AREA
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Start connectiong your world.
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" className={classes.button} onClick={
                                            this.handleRedirect
                                        }>
                                            Get More
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container className={classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {this.state.cards ? this.state.cards.map(card => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image= {
                                                this.state.areas[card] ? this.state.areas[card].img : default_img
                                            }
                                            title="Image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {this.state.areas[card] ? this.state.areas[card].name : ""}
                                            </Typography>
                                            <Typography>
                                                {this.state.areas[card] ? this.state.areas[card].description : ""}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )): <div> Loading </div>}
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

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (Dashboard);