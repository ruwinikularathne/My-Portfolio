import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id='contact'>
            <div className="section_header center">
                    <h2 className="primary_title">Contact Me</h2>
                </div>
            <div className="section_wrapper contact_container">
                <form className="contact_form">
                    <div className="input_group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="input_group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input_group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn_contact">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;