import React from 'react';
import './Contact.css';
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "69ee2c17-be02-4dac-9159-a0f598b502e5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      };

    return (
        <section id='contact'>
            <div className="section_header center">
                    <h2 className="primary_title">Contact Me</h2>
                </div>
            <div className="section_wrapper contact_container">
                <form className="contact_form" onSubmit={onSubmit}>
                    <div className="input_group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder='Enter your name' name="name" required />
                    </div>
                    <div className="input_group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder='Enter your email address' name="email" required />
                    </div>
                    <div className="input_group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder='Enter your message' name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn_contact">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;