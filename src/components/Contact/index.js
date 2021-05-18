import React from 'react';
import './style.css';
function Contact () {
    return (
        <section className="container" id="contact">
            <div className="container mt-3">
            <div className="jumbotron">
                <div className="d-flex justify-content-center">
                    <h2>Contact with me</h2>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <a className="text-decoration-none text-dark"
                        href="https://drive.google.com/file/d/1dOg1hknopJzsX1oaNNazRvj80yRnfoRn/view?usp=sharing"
                        target="blank"><i className="fas fa-address-card fa-4x"></i>
                        <p className="text-center">Resume</p>
                    </a>
                    <a className="text-decoration-none text-dark" href="https://github.com/TolgaS92" target="blank"><i
                            className="fab fa-github fa-4x"></i>
                        <p className="text-center">Github</p>
                    </a>
                    <a className="text-decoration-none text-dark" href="https://www.linkedin.com/in/tolgasecme/" target="blank"><i
                            className="fab fa-linkedin-in fa-4x"></i>
                        <p className="text-center">Linkedin</p>
                    </a>
                </div>
                <hr className="my-4" />
                <p className="d-flex justify-content-center"><i
                        className="fas fa-envelope-open-text fa-2x mr-3"></i>tolgasecme@icloud.com
                </p>
                <a className="btn btn-dark btn-lg d-flex justify-content-center"
                    href="mailto:tolgasecme@icloud.com" role="button">Contact Me</a>
            </div>
        </div>
        </section>
    )
}

export default Contact;