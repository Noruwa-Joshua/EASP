import axios from "axios";
import ipAddress from "../constant";
import "../assets/css/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [matric, setMatric] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${ipAddress}/auth/signin`, {
        email: matric,
        password,
      });

      console.log(data.data.token);
      sessionStorage.setItem("userToken", data.data.token);
      alert("Welcome");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      console.error(error?.response?.data?.error?.message);
    }
  };
  return (
    <div className="main">
      <img src={"../assets/static/anchor_logo 1Alogo.jpg"} alt="AUL Logo" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Registration Number"
          required
          onChange={(e) => setMatric(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        <a href="">Forgot Password?</a>
      </form>
      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
      </div>
      <h2>Anchor University, Lagos.</h2>
      <p>2024</p>
    </div>
  );
};

export default Login;
