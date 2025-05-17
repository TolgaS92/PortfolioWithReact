import React from 'react';
import './style.css';
import Resume from './resume/Tolga_Secme_Resume_pdf_05_17_2025.pdf';



function About() {
    return (
        <section className="bg-light about-page" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 text-center">
                        <h2 className="text-center mt-0 about">About Me</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-muted mb-0"> Results-oriented Software Developer with 5+ years of experience in full-stack development, cloud migration, and
                                                        DevOps automation. Proficient in C#, .NET Core, Angular, React, and AWS. Skilled in RESTful API development, SQL
                                                        optimization, and implementing CI/CD pipelines using GitHub Actions. Passionate about leveraging AI tools like
                                                        ChatGPT and Cursor to improve code quality and reduce bugs. Collaborative and detail-focused with a proven ability to
                                                        align development with business goals</p>
                            <hr></hr>
                            <div className="col-sm-12">
                            <a href={Resume} target="blank" className="btn btn-outline-dark about-btn" role="button"><i className="fas fa-user-circle"></i> Resume</a>
                            <a href="https://github.com/TolgaS92" className="btn btn-dark about-btn btn-outline-light" target="blank" role="button"><i className="fab fa-github"></i> Github</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;