import React from "react";
import CountUp from "react-countup";
import "../about/about.css";
import aboutImg from "../../assets/about-us.png";

const About = () => {
  return (
    <div className="about__container" id="about">
      <div className="about__img">
        <img src={aboutImg} alt="" />
      </div>

      <div className="about__us">
        <h1>About Us</h1>
        <p>
          SkillX is an online learning community with thousands of classes
          for creative and curious people, on topics including illustration,
          design, photography, video, freelancing, and more. On skillX,
          you’ll find inspiration from hands-on classes and teachers at the top
          of their creative fields, so you can take the next step in your
          creative journey.
        </p>
        <div className="aboutCounter">
          <div className="single__counter">
            <span className="counter">
              <CountUp start={0} end={5} duration={2} suffix="K" />
            </span>

            <p className="counter__title">Total students</p>
          </div>
          <div className="single__counter">
            <span className="counter">
              <CountUp start={0} end={2} duration={2} suffix="K" />
            </span>

            <p className="counter__title">Total Mentors</p>
          </div>

          <div className="single__counter">
            <span className="counter">
              <CountUp start={0} end={8} duration={2} suffix="K" />
            </span>

            <p className="counter__title">Completed Projects</p>
          </div>
          <div className="single__counter">
            <span className="counter">
              <CountUp start={0} end={6} duration={2} suffix="K" />
            </span>

            <p className="counter__title">Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
