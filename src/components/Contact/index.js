import React from 'react';
import './style.css';
import Resume from './resume/TolgaSecmeNewResumeSecondUpdate.pdf';

function Contact () {
    return (
        <section className="container" id="contact">
            <div className="jumbotron">
            <h2 className="text-center mb-5">Contact</h2>
            <hr></hr>
                <div className="d-flex justify-content-center">
                    <div className="row">
                    <div className="col-sm-4 ml-auto">
                    <a className="text-decoration-none text-dark"
                        href={Resume}
                        target="blank"><i className="fas fa-address-card fa-4x"></i>
                        <p className="text-center">Resume</p>
                    </a>
                    </div>
                    <div className="col-sm-4 ml-auto">
                    <a className="text-decoration-none text-dark" href="https://github.com/TolgaS92" target="blank"><i
                            className="fab fa-github fa-4x"></i>
                        <p className="text-center">Github</p>
                    </a>
                    </div>
                    <div className="col-sm-4 ml-auto">
                    <a className="text-decoration-none text-dark" href="https://www.linkedin.com/in/tolgasecme/" target="blank"><i
                            className="fab fa-linkedin-in fa-4x"></i>
                        <p className="text-center">Linkedin</p>
                    </a>
                    </div>
                    </div>
                </div>
                <a className="btn btn-dark btn-lg d-flex justify-content-center"
                    href="mailto:tolgasecme@icloud.com" role="button">Contact Me</a>
                    <p className="d-flex justify-content-center mt-3"><i
                        className="fas fa-envelope-open-text fa-2x mr-3"></i>tolgasecme@icloud.com
                </p>
                </div>
        </section>
    )
}

export default Contact;