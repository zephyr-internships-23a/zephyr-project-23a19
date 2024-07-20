import React, { useState } from "react";
import "../login/login.css"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("/api/V1/auth/login", {
        email,
        password,
      });
      if(res && res.data.success){
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    
      
    }catch(error){
      console.log(error);
      toast.error("Something went wrong")
    }
  };

  return (
    <div className="login__container">
      <form>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter Your Email"
          className="login__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          className="login__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>Don't have an account? Please <Link to="/register">Register</Link></span>
        <button className="login__btn" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
