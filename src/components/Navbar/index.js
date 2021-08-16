import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core';
import useStyles from './style';

function Navbar () {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Button component={Link} to="/PortfolioWithReact/">
                <a className="navbar-brand text-warning" href="/">Tolga Secme</a>
                </Button>
            </div>
            <div>
            </div>
        <Toolbar 
            className={classes.toolbar}>
                <div className={classes.profile}>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/about">About</Button>
                </Typography>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/certificates">Certificates</Button>
                </Typography>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/portfolio">Portfolio</Button>
                </Typography>
                <Typography className={classes.heading} align="left">
                    <Button className={classes.button} component={Link} to="/contact">Contact</Button>
                </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;