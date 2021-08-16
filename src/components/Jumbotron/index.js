import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import Profile from './images/profilepic.jpg';
import useStyles from './styles';

function Jumbotron () {
    const classes = useStyles();
    return (
        <header className="intro" id="jumbotron">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-white font-weight-medium">Full Stack Web Developer</h1>
                    </div>
                    <hr></hr>
                    <img src={Profile} className={classes.profile} alt="profilepicture" />
                    <hr></hr>
                    <Typography className={classes.heading} align="center">
                        <Button className={classes.button} component={Link} to="/portfolio">Portfolio</Button>
                    </Typography>
                </div>
            </div>
        </header>
    )
}

export default Jumbotron;