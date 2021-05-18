import React from 'react';
import './style.css';

function About() {
    return (
        <section className="bg-light about-page" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-center mt-0">About Me</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-muted mb-0">Tolga Secme is a Full-Stack Web Developer experienced with Front End development, API’s, Back End Development. Programming & Markup languages: Node.Js., Express, JavaScript, jQuery, React.js, React, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6, React Hooks, JSON, Sequelize</p>
                            <div>
                                <a href="https://drive.google.com/file/d/1dOg1hknopJzsX1oaNNazRvj80yRnfoRn/view?usp=sharing" target="blank" className="btn btn-outline-dark about-btn" role="button"><i class="fas fa-user-circle"></i> Resume</a>
                                <a href="https://github.com/TolgaS92" className="btn btn-dark about-btn" target="blank" role="button"><i className="fab fa-github"></i> Github</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;