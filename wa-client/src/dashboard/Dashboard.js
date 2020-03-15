import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import api from "../api";
import {Redirect} from "react-router-dom";
import AreaAppBar from "../components/AppBar"
import AreaFooter from "../components/Footer";
import { dashboardStyles } from "../styles/styles";
import { useTheme } from "@material-ui/core";

export default function Dashboard() {
    const [createArea, setCreateArea] = useState(false);
    const [areas, setAreas] = useState([]);
    const [cards, setCards] = useState([]);
    const classes = dashboardStyles(useTheme);

    useEffect(() => {
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
            setAreas(data);
            setCards(cards_tmp);
        });
    }, []);

    if (createArea)
        return (<Redirect to={"/CreateArea"}/>);
    else
        return (
          <React.Fragment>
              <CssBaseline/>
              <AreaAppBar classes={classes}/>
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
                                      <Button variant="contained" className={classes.button} onClick={() => {
                                          setCreateArea(true)
                                      }}>
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
                          { cards ? cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                      className={classes.cardMedia}
                                      image= {
                                          areas[card] ? areas[card].img : ""
                                      }
                                      title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { areas[card] ? areas[card].name : ""}
                                        </Typography>
                                        <Typography>
                                            { areas[card] ? areas[card].description : ""}
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
              <AreaFooter classes={classes}/>
          </React.Fragment>
        );
}