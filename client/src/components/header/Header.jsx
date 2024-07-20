import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../header/header.css";
import heroImg from "../../assets/hero-img1.png";

const Header = () => {
  // const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <div className="header">
        <div className="header__title">
          <h2>skillX</h2>
        </div>

        <div className="header__components">
          <Link className="header__components--single" to="#">
            Home
          </Link>
          <Link className="header__components--single" to="#about" smooth>
            About
          </Link>
          <Link className="header__components--single" to="#categories" smooth>
            Categories
          </Link>
          <Link className="header__components--single" to="#courses" smooth>
            Courses
          </Link>
          <Link className="header__components--single" to="#testimonials" smooth>
            Testimonials
          </Link>
          <Link className="header__components--single" to="/login">
            Login
          </Link>
          <Link className="header__components--single" to="/register">
            Register
          </Link>
          {/* <nav>
            <a
              href="#"
              onClick={() => setActiveNav("#")}
              className={activeNav === "#" ? "active" : ""}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={activeNav === "#about" ? "active" : ""}
            >
              About
            </a>
            <a
              href="#categories"
              onClick={() => setActiveNav("#categories")}
              className={activeNav === "#categories" ? "active" : ""}
            >
              Categories
            </a>

            <a
              href="#courses"
              onClick={() => setActiveNav("#courses")}
              className={activeNav === "#courses" ? "active" : ""}
            >
              Courses
            </a>
            <a
              href="#testimonials"
              onClick={() => setActiveNav("#testimonials")}
              className={activeNav === "#testimonials" ? "active" : ""}
            >
              Testimonials
            </a>
          </nav> */}
        </div>
      </div>

      <div className="home__section">
        <div className="home__section--content">
          <h3>Welcome to skillX</h3>
          <h2>Best Online Education Platform</h2>
          <p>
            Whether it's a first brush on canvas or the last frame in an
            animation, skillX is here to support you on every step of your
            journey. Become a pro with thousands of online classes.
          </p>

          <button>VIEW COURSES</button>
        </div>
        <div className="home__section--image">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
