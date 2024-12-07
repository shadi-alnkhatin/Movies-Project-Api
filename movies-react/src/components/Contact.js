import React, { useState } from 'react';
import Swal from 'sweetalert2';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, subject, message } = formData;

        // Validation (can be extended as needed)
        if (!name || !email || !phone || !subject || !message) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill all fields.',
                icon: 'error',
            });
            return;
        }

        // Simulate email sending (you can integrate an actual service like SMTP or an API)
        // For now, we just show a success message
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            icon: 'success',
        });

        // Clear form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        });
    };

    return (
        <section className="content container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                {/* Name and Email */}
                <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <input
                            type="text"
                            required
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>

                {/* Phone and Subject */}
                <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <input
                            type="text"
                            required
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            required
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="mb-3">
                    <textarea
                        name="message"
                        required
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="form-control"
                    />
                </div>

                {/* Submit Button */}
                <button className= "message" type="submit">
                    Send Message
                </button>
            </form>

            {/* Contact Information */}
            <div className="footer-contact">

            </div>
        </section>
    );
};

export default Contact;
