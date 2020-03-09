import Typography from "@material-ui/core/Typography";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import api from '../api'

export default class AreaAppBar extends React.Component {
    handleLogout = () => {
        api.logout().then(res => {
            if (res.status === 200) {
                localStorage.clear();
                window.location.reload();
            }
        }).catch(err => {
            console.log(err)
        })
    };

    render = () => {
        const { classes } = this.props;
        return (
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar>
                <div>
                    <IconButton color="inherit" >
                        <Badge color="secondary">
                            <LineWeightIcon/>
                        </Badge>
                    </IconButton>
                </div>
                <div>
                <Typography variant="h6" style={{fontWeight: 900}} noWrap>
                        AREA
                    </Typography>
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                    <IconButton color="inherit" onClick={this.handleLogout}>
                        <Badge color="secondary">
                            <PowerSettingsNew/>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}};