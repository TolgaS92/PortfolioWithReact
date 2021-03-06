import React from 'react';
import Crypto from './images/homepage.JPG';
import PPCO from './images/homepageppco.jpg';
import NPWA from './images/NPandWA.png';
import Dashboard from './images/dashboard.jpg';
import Notebook from './images/notebook.png';
import Weather from './images/WeatherDashboard.jpg';
import Dayplanner from './images/Dayplanner.jpg';
import Password from './images/PasswordGen.jpg';
import './style.css';

function Portfolio () {
    return (
        <section id="portfolio">
            <div className="container">
            <div className="row justify-content-center">
            <h2 className="text-center mt-5 portfolio">Portfolio</h2>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Crypto} className="card-img-top" alt="cryptoCars" />
                        <div className="card-body">
                            <h5 className="card-title">CryptoCars</h5>
                            <p className="card-text">The user can search using their cars VIN number and get the average market price for their car in USD and the current Crypto Currency price. Because the cryto currency market is changing at such a rapid pace, the user can save the searched price eveytime they search to see if the crypto price is increasing or decreasing.</p>
                            <a href="https://cryptocarsmern.herokuapp.com/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Go to Application</a>
                            <a href="https://github1s.com/TolgaS92/CryptoCars" target="blank" className="ms-5 btn btn-light btn-outline-dark">Browse the Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={PPCO} className="card-img-top" alt="ppco" />
                        <div className="card-body">
                            <h5 className="card-title">Parenting Practice CO</h5>
                            <p className="card-text">Created web application for a real client who is a
                                                pediatric sleep
                                                specialist. Our client was overwhelmed with using multiple applications
                                                to interact with her clients. We have solved her problems by creating
                                                one site that collects user data on a daily bases from her clients.</p>
                            <a href="https://parentingpracticeco.herokuapp.com/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Go to Application</a>
                            <a href="https://github1s.com/TolgaS92/ParentingPracticeCO" target="blank" className="ms-5 btn btn-light btn-outline-dark">Browse the Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={NPWA} className="card-img-top" alt="npwa" />
                        <div className="card-body">
                            <h5 className="card-title">National Park and Weather Service</h5>
                            <p className="card-text">As a user I want to search for the nearest national
                                                park to a given
                                                location, so that I know when the park is open and closed and I can find
                                                the available activities to plan my vacation. Also I want to know the
                                                local weather so that I can plan accordingly.</p>
                            <a href="https://tolgas92.github.io/National-Parks-and-Weather-Services/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Go to Application</a>
                            <a href="https://github1s.com/TolgaS92/National-Parks-and-Weather-Services" target="blank" className="ms-5 btn btn-light btn-outline-dark">Browse the Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Dashboard} className="card-img-top" alt="mvc" />
                        <div className="card-body">
                            <h5 className="card-title">Tech Blog MVC</h5>
                            <p className="card-text">An Application that you have to create an account, and
                                                after sign in to the app it will let you create, update, delete a blog
                                                contents.</p>
                            <a href="https://pure-reaches-15227.herokuapp.com/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Go to Application</a>
                            <a href="https://github1s.com/TolgaS92/TechBlog-MVC" target="blank" className="ms-5 btn btn-light btn-outline-dark">Browse the Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Notebook} className="card-img-top" alt="notebook" />
                        <div className="card-body">
                            <h5 className="card-title">The Notebook taker</h5>
                            <p className="card-text">This application is creating or deleting notes with
                                                using node.js, and express.</p>
                            <a href="https://sheltered-island-38155.herokuapp.com/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Go to Application</a>
                            <a href="https://github1s.com/TolgaS92/TheNoteBookTaker" target="blank" className="ms-5 btn btn-light btn-outline-dark">Browse the Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Weather} className="card-img-top" alt="weatherdashboard" />
                        <div className="card-body">
                            <h5 className="card-title">Weather App</h5>
                            <p className="card-text">Our goal is to retreve weather data for cities, with
                                                using third-party Api's and localstorage to create interactive weather
                                                forecast website.</p>
                            <a href="https://tolgas92.github.io/Weather-Dashboard/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Go to Application</a>
                            <a href="https://github1s.com/TolgaS92/Weather-Dashboard" target="blank" className="ms-5 btn btn-light btn-outline-dark">Browse the Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Dayplanner} className="card-img-top" alt="dayplanner" />
                        <div className="card-body">
                            <h5 className="card-title">Calender-Day Planner</h5>
                            <p className="card-text">The purpose of this page to create a simple calender
                                                application that allows to user to save events for each hour of the day.
                                                This app will run in the browser and feature dynamically updated HTML
                                                and CSS powered by jQuery.</p>
                            <a href="https://tolgas92.github.io/Calender-Day-Planner/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Go to Application</a>
                            <a href="https://github1s.com/TolgaS92/Calender-Day-Planner" target="blank" className="ms-5 btn btn-light btn-outline-dark">Browse the Code</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 px-5 py-5">
                    <div className="card">
                        <img src={Password} className="card-img-top" alt="passwordgen" />
                        <div className="card-body">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">The purpose of this page to generate a random password
                                                with given numbers,alfabethics, and symbols.</p>
                            <a href="https://tolgas92.github.io/Password-Generator/" target="blank" className="ms-5 btn btn-dark btn-outline-light">Go to Application</a>
                            <a href="https://github1s.com/TolgaS92/Password-Generator" target="blank" className="ms-5 btn btn-light btn-outline-dark">Browse the Code</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Portfolio;