import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

export default class AreaAppBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        const { classes } = this.props;
        return (
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" style={{fontWeight: 900}} noWrap>
                    AREA
                </Typography>
            </Toolbar>
        </AppBar>
    );
}};