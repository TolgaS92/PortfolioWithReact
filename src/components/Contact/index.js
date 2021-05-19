import React from 'react';
import './style.css';
import Resume from './resume/TolgaSecmeNewResumeSecondUpdate.pdf';

function Contact () {
    return (
        <section className="bg-light about-page" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                    <h2 className="text-white text-center mb-5 contact">Feel Free to Contact</h2>
                        <hr className="divider" />
                        <div className="row">
                        <div className="col-sm-4 ml-auto">
                            <a className="text-decoration-none text-white" href="https://www.linkedin.com/in/tolgasecme/" target="blank"><i
                                className="fab fa-linkedin-in fa-4x"></i>
                            <p className="text-center">Linkedin</p>
                            </a>
                        </div>
                        <div className="col-sm-4 ml-auto">
                            <a className="text-decoration-none text-white" href={Resume} target="blank"><i class="fas fa-id-card fa-4x"></i>
                            <p className="text-center">Resume</p>
                            </a>
                        </div>
                        <div className="col-sm-4 ml-auto">
                            <a className="text-decoration-none text-white" href="mailto:tolgasecme@icloud.com" target="blank"><i class="fas fa-envelope-open-text fa-4x"></i>
                            <p className="text-center">Email</p>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;