import React from 'react';
import './style.css';
import Profile from './images/profilePhoto.JPG';
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
                    <div className="col-lg-8 align-self-baseline">
                        <a href="#portfolio" id="portfolioBtn" className="btn btn-lg btn-dark btn-outline-light px-4">Portfolio</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Jumbotron;