import React, { useState } from "react";
import emailjs from "emailjs-com";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};


const INITIAL_STATE = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  subject: "",
  message: "",
};
export default function Contact() {
  const [formValues, setFormValues] = useState(INITIAL_STATE);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.first_name.trim()) {
      newErrors.first_name = "First Name is required";
    }
    if (!formValues.last_name.trim()) {
      newErrors.last_name = "Last Name is required";
    }
    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formValues.phone_number.trim()) {
      newErrors.phone_number = "Phone Number is required";
    }
    if (!formValues.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formValues);
      emailjs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          e.target,
          process.env.USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alertContent();
           setFormValues(INITIAL_STATE);
          (error) => {
            console.log(error.text);
          }}
        );
    }
  };

  return (
    <>
      <Layout
        breadcrumbTitle="Contact Us"
        imageUrl="/assets/img/hero/calgary-skyline.jpg"
      >
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div
                  className="contact-form-wrap"
                  data-background="/assets/img/images/contact_form_bg.jpg"
                >
                  <h2 className="title">Contact With Us</h2>
                  <p>
                    Send us a message and we' ll respond as soon as possible
                  </p>

                  <form onSubmit={sendEmail} className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            placeholder="First Name*"
                            value={formValues.first_name}
                            onChange={handleChange}
                          />
                          {errors.first_name && (
                            <span className="error text-danger">
                              {errors.first_name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="last_name"
                            name="last_name"
                            type="text"
                            placeholder="Last Name*"
                            value={formValues.last_name}
                            onChange={handleChange}
                          />
                          {errors.last_name && (
                            <span className="error text-danger">
                              {errors.last_name}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email Address*"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <span className="error text-danger">
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="phone_number"
                            name="phone_number"
                            type="text"
                            placeholder="Phone Number*"
                            value={formValues.phone_number}
                            onChange={handleChange}
                          />
                          {errors.phone_number && (
                            <span className="error text-danger">
                              {errors.phone_number}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="form-grp">
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Subject*"
                          value={formValues.subject}
                          onChange={handleChange}
                        />
                        {errors.subject && (
                          <span className="error text-danger">
                            {errors.subject}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message here"
                        value={formValues.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <span className="error text-danger">
                          {errors.message}
                        </span>
                      )}
                    </div>
                    <button className="btn" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-10 ">
                <div className="contact-info-wrap">
                  <h2 className="title">Need Any Help?</h2>
                  <p>
                    Call us or message and we' ll respond as soon as possible
                  </p>
                  <ul className="list-wrap">
                    <li>
                      <div className="contact-info-item">
                        <Link href="tel:+14034705239">
                          <div className="icon">
                            <i className="fas fa-phone-alt" />
                          </div>
                        </Link>
                        <div className="content">
                          <Link href="tel:+14036302629">+1 (403) 630-2629</Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <Link href="mailto:support@ericaroofing.com">
                          <div className="icon">
                            <i className="fas fa-envelope" />
                          </div>
                        </Link>
                        <div className="content">
                          <Link href="mailto:support@ericaroofing.com">
                            support@ericaroofing.com
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <p>
                            36 Redstone Drive NE, <br /> Calgary AB
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* contact-map */}
                <div id="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25080.25316447707!2d-114.04068820800247!3d51.1677321022108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f0c2e3281c7%3A0x99244aae3e68d633!2s36%20Redstone%20Dr%20NE%2C%20Calgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1678975266976!5m2!1sen!2sus"
                    height="570"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* contact-map-end */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
