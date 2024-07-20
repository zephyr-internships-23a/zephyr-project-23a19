import React from "react";
import "../footer/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container--title">
        <h1>skillX</h1>
        <h3>Follow us on:</h3>
        <div className="social">
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaXTwitter />
          </span>
        </div>
      </div>

      <div className="footer__container--explore">
        <h3>Explore</h3>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Categories</ul>
        <ul>Courses</ul>
        <ul>Partners</ul>
        <ul>Testimonials</ul>
      </div>

      <div className="footer__container--links">
        <h3>Quick Links</h3>
        <ul>Pricing</ul>
        <ul>Terms & Conditions</ul>
        <ul>Privacy</ul>
        <ul>Feedback</ul>
        <ul>Careers</ul>
        <ul>Investors</ul>
      </div>

      <div className="footer__container--location">
        <h3>Get in Touch</h3>
        <ul>Address: 68 Roadstreet, Rangoli Nagar, Andheri East, Mumbai</ul>
        <ul>Phone: +91-9087654321</ul>
        <ul>Email: skillX@gmail.com</ul>
      </div>
    </div>
  );
};

export default Footer;
