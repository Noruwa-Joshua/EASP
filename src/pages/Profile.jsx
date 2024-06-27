import { useState } from "react";
import "../assets/css/main.css";
import axios from "axios";
import ipAddress from "../constant";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [faculty, setFaculty] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const token = sessionStorage.getItem("userToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${ipAddress}/user/screeningInfo`,
        {
          firstname,
          lastname,
          facultyOfChoice: faculty,
          courseOfChoice: course,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);

      if (data.status) navigate("/main");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <img src="../assets/img/logo.png" alt="Logo" />
        <a href="">
          <img src="../assets/img/close.jpg" alt="Close" />
        </a>
      </div>

      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
        <div className="horizontal-line2"></div>
      </div>
      <div className="application-form">
        <h3>Kindly fill the form below</h3>
        <form
          onSubmit={handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="pi">
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="text"
              name="faculty"
              placeholder="Faculty"
              required
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              name="course"
              placeholder="Course"
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <button id="info" type="submit">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
