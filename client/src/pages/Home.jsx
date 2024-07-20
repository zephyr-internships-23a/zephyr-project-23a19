import React from "react";
import About from "../components/about/About";
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Courses from "../components/courses/Courses";
import Testimonials from "../components/testimonials/Testimonials";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Categories />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
