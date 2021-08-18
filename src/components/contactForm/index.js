import React, { useState } from "react";
import emailjs from 'emailjs-com';

function ContactForm() {
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userMessage, setUserMessage] = useState();

    const handleFormSubmit = event => {
        event.preventDefault();
        if (!userName || !userEmail || !userMessage) {
            alert("Please fill the empty areas")
        } else {
            sendMessage(event)
            alert("Your message has been sent, thank you!")
        }
        setUserName()
        setUserEmail()
        setUserMessage()
    };

    const sendMessage = event => {
        event.preventDefault();
        emailjs.sendForm("service_m8jy76a","template_vadaq7i", event.target, "user_olJpBF2IFnl6C7aW08wLN",{
            from_name: "",
            to_name: "",
            message: "",
            from_email: "",
            })
            .then(() => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <h2 className="col-sm-12 mt-5 font-weight-bold text-white">Contact Form</h2>
            </div>
            <section className="row">
                <form className="col-lg-12" onSubmit={handleFormSubmit}>
                    <div className="col-md-12">
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="name">Name</label>
                                <br />
                                <input type="text" className="form-control" id="name" name="from_name" placeholder="Name" onChange={e => setUserName(e.target.value)} />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" className="form-control" id="email" name="from_email" placeholder="Email" onChange={e => setUserEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-12">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Message" type="text" name="message" onChange={e => setUserMessage(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-sm-12 mt-2">
                                <button type="submit" value="Send" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ContactForm;