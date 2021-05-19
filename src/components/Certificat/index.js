import React from 'react';
import Coursera from './images/CourseraCertificate.jpg';
import Udacity from './images/UdacityCertificate.jpg';
import './style.css';

function Certificat () {
    return (
        <section id="certificat">
            <div className="container">
            <h2 className="text-center mb-5 text-white certificates">Certificates</h2>
                <div className="row no-gutters">
                    <div className="col-sm-6">
                        <div className="card">
                            <a href={Coursera} target="blank">
                                <img href="" src={Coursera} className="card-img-top" alt="coursera" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <a href={Udacity} target="blank">
                                <img src={Udacity} className="card-img-top" alt="udacity" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificat;