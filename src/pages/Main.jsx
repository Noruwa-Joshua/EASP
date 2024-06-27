import axios from "axios";
import "../assets/css/main.css";
import ipAddress from "../constant";
import { useState } from "react";

const subjects = [
  "Enter Subject",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Geography",
  "Economics",
  "Government",
  "History",
  "Literature in English",
  "Christian Religious Studies",
  "Islamic Religious Studies",
  "Agricultural Science",
  "Civic Education",
  "Computer Studies",
];

const Main = () => {
  const [formState, setFormState] = useState({
    application_form: null,
    receipt: null,
    clergy_referral: null,
    civil_servant_referral: null,
    credentials: null,
    utme_result: null,
    birth_certificate: null,
    subject1: "",
    grade1: "",
    subject2: "",
    grade2: "",
    subject3: "",
    grade3: "",
    subject4: "",
    grade4: "",
    subject5: "",
    grade5: "",
    subject_waec1: "Use of English",
    score_waec1: "",
    subject_waec2: "",
    score_waec2: "",
    subject_waec3: "",
    score_waec3: "",
    subject_waec4: "",
    score_waec4: "",
    total_score_olevel: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormState({
      ...formState,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("userToken");
    const formData = new FormData();
    for (let key in formState) {
      formData.append(key, formState[key]);
    }

    try {
      // Upload files using FormData
      const uploadFilesRequest = axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Prepare JAMB result data
      const jambResult = {
        [formState.subject_waec1]: formState.score_waec1,
        [formState.subject_waec2]: formState.score_waec2,
        [formState.subject_waec3]: formState.score_waec3,
        [formState.subject_waec4]: formState.score_waec4,
      };

      // Submit JAMB result
      const uploadJambRequest = axios.post(
        `${ipAddress}/user/uploadjamb`,
        { result: jambResult },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Prepare O'Level result data
      const oLevel = {
        [formState.subject1]: formState.grade1,
        [formState.subject2]: formState.grade2,
        [formState.subject3]: formState.grade3,
        [formState.subject4]: formState.grade4,
        [formState.subject5]: formState.grade5,
      };

      // Submit O'Level result
      const uploadOLevelRequest = axios.post(
        `${ipAddress}/user/uploadoresult`,
        { result: oLevel },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Wait for all requests to complete
      await Promise.all([
        uploadFilesRequest,
        uploadJambRequest,
        uploadOLevelRequest,
      ]);

      console.log("Files and data uploaded successfully.");
    } catch (error) {
      console.error(
        "Error uploading files and data:",
        error.response ? error.response.data : error.message
      );
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
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <h3>Please upload the following documents</h3>
          <div className="p2">
            <div className="upload-group">
              <label htmlFor="application-form">Printed application form</label>
              <br />
              <input
                type="file"
                id="application-form"
                name="application_form"
                required
                onChange={handleChange}
              />
            </div>
            <div className="upload-group">
              <label htmlFor="receipt">Photocopy of receipt</label>
              <br />
              <input
                type="file"
                id="receipt"
                name="receipt"
                required
                onChange={handleChange}
              />
            </div>
            <div className="upload-group">
              <label htmlFor="clergy-referral">
                Referral letter from a clergy
              </label>
              <br />
              <input
                type="file"
                id="clergy-referral"
                name="clergy_referral"
                required
                onChange={handleChange}
              />
            </div>
            <div className="upload-group">
              <label htmlFor="civil-servant-referral">
                Referral letter from a civil servant not below level 12
              </label>
              <br />
              <input
                type="file"
                id="civil-servant-referral"
                name="civil_servant_referral"
                required
                onChange={handleChange}
              />
            </div>
            <div className="upload-group">
              <label htmlFor="credentials">
                Original copies of credentials (at not more than one sitting)
              </label>
              <br />
              <input
                type="file"
                id="credentials"
                name="credentials"
                required
                onChange={handleChange}
              />
            </div>
            <div className="upload-group">
              <label htmlFor="utme-result">
                UTME result print out with picture
              </label>
              <br />
              <input
                type="file"
                id="utme-result"
                name="utme_result"
                required
                onChange={handleChange}
              />
            </div>
            <div className="upload-group">
              <label htmlFor="birth-certificate">
                Photocopy of birth certificate/Sworn Declaration of age
              </label>
              <br />
              <input
                type="file"
                id="birth-certificate"
                name="birth_certificate"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <h3>O’Level Result (WAEC/NECO)</h3>
          <div className="p3">
            <div id="p">
              <p>Subjects</p>
              <p>Grades</p>
            </div>
            <div className="subject-group">
              <select
                name="subject1"
                className="subject-select"
                required
                onChange={handleChange}
                value={formState.subject1}
              >
                {subjects.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <select
                name="grade1"
                required
                onChange={handleChange}
                value={formState.grade1}
              >
                <option value="">Select Grade</option>
                <option value="A1">A1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="C4">C4</option>
                <option value="C5">C5</option>
                <option value="C6">C6</option>
                <option value="D7">D7</option>
                <option value="E8">E8</option>
                <option value="F9">F9</option>
              </select>
            </div>
            <div className="subject-group">
              <select
                name="subject2"
                className="subject-select"
                required
                onChange={handleChange}
                value={formState.subject2}
              >
                {subjects.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <select
                name="grade2"
                required
                onChange={handleChange}
                value={formState.grade2}
              >
                <option value="">Select Grade</option>
                <option value="A1">A1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="C4">C4</option>
                <option value="C5">C5</option>
                <option value="C6">C6</option>
                <option value="D7">D7</option>
                <option value="E8">E8</option>
                <option value="F9">F9</option>
              </select>
            </div>
            <div className="subject-group">
              <select
                name="subject3"
                className="subject-select"
                required
                onChange={handleChange}
                value={formState.subject3}
              >
                {subjects.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <select
                name="grade3"
                required
                onChange={handleChange}
                value={formState.grade3}
              >
                <option value="">Select Grade</option>
                <option value="A1">A1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="C4">C4</option>
                <option value="C5">C5</option>
                <option value="C6">C6</option>
                <option value="D7">D7</option>
                <option value="E8">E8</option>
                <option value="F9">F9</option>
              </select>
            </div>
            <div className="subject-group">
              <select
                name="subject4"
                className="subject-select"
                required
                onChange={handleChange}
                value={formState.subject4}
              >
                {subjects.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <select
                name="grade4"
                required
                onChange={handleChange}
                value={formState.grade4}
              >
                <option value="">Select Grade</option>
                <option value="A1">A1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="C4">C4</option>
                <option value="C5">C5</option>
                <option value="C6">C6</option>
                <option value="D7">D7</option>
                <option value="E8">E8</option>
                <option value="F9">F9</option>
              </select>
            </div>
            <div className="subject-group">
              <select
                name="subject5"
                className="subject-select"
                required
                onChange={handleChange}
                value={formState.subject5}
              >
                {subjects.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <select
                name="grade5"
                required
                onChange={handleChange}
                value={formState.grade5}
              >
                <option value="">Select Grade</option>
                <option value="A1">A1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="C4">C4</option>
                <option value="C5">C5</option>
                <option value="C6">C6</option>
                <option value="D7">D7</option>
                <option value="E8">E8</option>
                <option value="F9">F9</option>
              </select>
            </div>
          </div>

          <h3>UTME Result</h3>
          <div className="p4">
            <div id="p">
              <p>Subjects</p>
              <p>Scores</p>
            </div>
            <div className="subject-group">
              <select
                name="subject_waec1"
                required
                onChange={handleChange}
                value={formState.subject_waec1}
              >
                <option value="Use of English">Use of English</option>
              </select>
              <input
                type="number"
                name="score_waec1"
                placeholder="Score"
                required
                onChange={handleChange}
                value={formState.score_waec1}
              />
            </div>
            <div className="subject-group">
              <select
                name="subject_waec2"
                className="subject-select"
                required
                onChange={handleChange}
                value={formState.subject_waec2}
              >
                {subjects.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="score_waec2"
                placeholder="Score"
                required
                onChange={handleChange}
                value={formState.score_waec2}
              />
            </div>
            <div className="subject-group">
              <select
                name="subject_waec3"
                className="subject-select"
                required
                onChange={handleChange}
                value={formState.subject_waec3}
              >
                {subjects.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="score_waec3"
                placeholder="Score"
                required
                onChange={handleChange}
                value={formState.score_waec3}
              />
            </div>
            <div className="subject-group">
              <select
                name="subject_waec4"
                className="subject-select"
                required
                onChange={handleChange}
                value={formState.subject_waec4}
              >
                {subjects.map((subject, i) => (
                  <option key={i} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="score_waec4"
                placeholder="Score"
                required
                onChange={handleChange}
                value={formState.score_waec4}
              />
            </div>

            <div id="result">
              <label htmlFor="total-score-olevel">TOTAL SCORE FOR UTME</label>
              <input
                type="number"
                id="total-score-olevel"
                name="total_score_olevel"
                required
                onChange={handleChange}
                value={
                  +formState.score_waec1 +
                  +formState.score_waec2 +
                  +formState.score_waec3 +
                  +formState.score_waec4
                }
                disabled
              />
            </div>
          </div>

          <p>
            Click the submit button and wait for few seconds to confirm your
            submission{" "}
          </p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
