import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, subject, message } = formData;

        // Validation
        if (!name || !email || !phone || !subject || !message) {
            Swal.fire({
                title: "Error!",
                text: "Please fill all fields.",
                icon: "error",
            });
            return;
        }

        try {
            // API Request
            const response = await fetch("http://127.0.0.1:8000/api/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();

                Swal.fire({
                    title: "Success!",
                    text: data.message || "Your message has been sent successfully!",
                    icon: "success",
                });

                // Clear form after submission
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            } else {
                // Handle API errors
                const errorData = await response.json();
                Swal.fire({
                    title: "Error!",
                    text: errorData.message || "Something went wrong!",
                    icon: "error",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                title: "Error!",
                text: "Unable to connect to the server. Please try again later.",
                icon: "error",
            });
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-card">
                <h2 className="contact-title">Contact Us</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <input
                            type="text"
                            required
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                        />
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="text"
                            required
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                        />
                        <input
                            type="text"
                            required
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-row">
                        <textarea
                            name="message"
                            required
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="form-input"
                        />
                    </div>

                    <button className="submit-btn" type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
