import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Copyright from "./Copyright";

export default class AreaFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Coucou ceci est un footer
                </Typography>
                <Copyright/>
            </footer>
        );
    }};