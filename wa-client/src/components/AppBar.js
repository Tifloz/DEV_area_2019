import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import MenuItem from '@material-ui/core/MenuItem';

export default class AreaAppBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        const { classes } = this.props;
        return (
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar>
                <div>
                    <Typography variant="h6" style={{fontWeight: 900}} noWrap>
                        AREA
                    </Typography>
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton color="inherit">
                        <Badge color="secondary">
                            <PowerSettingsNew/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}};