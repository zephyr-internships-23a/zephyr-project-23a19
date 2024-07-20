import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./components/about/About";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Courses from "./components/courses/Courses";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </>
  );
}

export default App;
