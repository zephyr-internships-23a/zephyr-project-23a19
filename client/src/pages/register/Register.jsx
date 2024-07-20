import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../register/register.css";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [education, setEducation] = useState();
  const [address, setAddress] = useState();

  const handleSubmitStudent = async(e) => {
    e.preventDefault();
    try{
        const res = await axios.post("/api/V1/auth/register", {
            name,
            email,
            password,
            education,
            address
        });
        if(res && res.data.success){
          toast.success(res.data.message)
          navigate("/login")
        }else{
          toast.error(res.data.message)
        }
    }catch(error){
        console.log(error);
        toast.error("Something went wrong")
    }
  };

  const handleSubmitMentor = () => {};

  return (
    <div className="register__container">
      <form>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="register__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Email"
          className="register__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          className="register__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Educational Qualification"
          className="register__input"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Address"
          className="register__input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <span>Already have an account? <Link to="/login">Login</Link></span>
        <button className="register__btn" onClick={handleSubmitStudent}>Register as Student</button>
        <button className="register__btn" onClick={handleSubmitMentor}>Register as Mentor</button>
      </form>
    </div>
  );
};

export default Register;
