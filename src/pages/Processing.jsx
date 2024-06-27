import "../assets/css/aproved.css";
import "../assets/css/pending.css";
import "../assets/css/review.css";
import "../assets/css/dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ipAddress from "../constant";

const ApprovedPage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src="./img/logo.png" alt="Logo" />
        <div className="right">
          <a href="#mail" className="icon-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#notifications" className="icon-link">
            <i className="fas fa-bell"></i>
          </a>
          <a href="#profile" className="profile-link">
            <img
              src="./img/Mart-5.jpg"
              alt="Profile Icon"
              className="profile-icon"
            />
            <span className="profile-name">Are Martins</span>
          </a>
        </div>
      </div>

      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
        <div className="horizontal-line2"></div>
      </div>

      <div className="status-header">
        <h2>Admission Application Status</h2>
      </div>

      <div className="progress-steps">
        <div className="step completed">
          <span className="step-number">1</span>
          <span className="step-name">Submitted</span>
        </div>
        <div className="step completed">
          <span className="step-number">2</span>
          <span className="step-name">Under Review</span>
        </div>
        <div className="step completed">
          <span className="step-number">3</span>
          <span className="step-name">Decision Made</span>
        </div>
        <div className="step completed">
          <span className="step-number">4</span>
          <span className="step-name">Approved</span>
        </div>
        <div className="step completed">
          <span className="step-number">5</span>
          <span className="step-name">Accepted</span>
        </div>
      </div>

      <div className="status-message">
        <p>
          You're in! Congratulations on being admitted to Anchor University,
          Lagos! We're thrilled to welcome you to our school.{" "}
          <a href="#">Click here</a> to continue.
        </p>
      </div>
    </div>
  );
};

const StatusPage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src="./img/logo.png" alt="Logo" />
        <div className="right">
          <a href="#mail" className="icon-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#notifications" className="icon-link">
            <i className="fas fa-bell"></i>
          </a>
          <a href="#profile" className="profile-link">
            <img
              src="./img/Mart-5.jpg"
              alt="Profile Icon"
              className="profile-icon"
            />
            <span className="profile-name">Are Martins</span>
          </a>
        </div>
      </div>

      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
        <div className="horizontal-line2"></div>
      </div>

      <div className="status-header">
        <h2>Admission Application Status</h2>
      </div>

      <div className="progress-steps">
        <div className="step completed">
          <span className="step-number">1</span>
          <span className="step-name">Submitted</span>
        </div>
        <div className="step completed">
          <span className="step-number">2</span>
          <span className="step-name">Under Review</span>
        </div>
        <div className="step completed">
          <span className="step-number">3</span>
          <span className="step-name">Decision Made</span>
        </div>
        <div className="step">
          <span className="step-number">4</span>
          <span className="step-name">Pending Approval</span>
        </div>
        <div className="step">
          <span className="step-number">5</span>
          <span className="step-name">Approved</span>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Printed application form</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>Photocopy of receipt</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>Referral Letter from a clergy</td>
              <td>
                <span className="status rejected">Rejected</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>Referral Letter from civil servant not below level 12</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>
                Original copies of credential (at not more than one sitting)
              </td>
              <td>
                <span className="status rejected">Rejected</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>UTME result print out with picture</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>Photocopy of birth certificate/Sworn Declaration of age</td>
              <td>
                <span className="status approved">Approved</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
            <tr>
              <td>Printed application form</td>
              <td>
                <span className="status rejected">Rejected</span>
              </td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const PendingPage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src="./img/logo.png" alt="Logo" />
        <div className="right">
          <a href="#mail" className="icon-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#notifications" className="icon-link">
            <i className="fas fa-bell"></i>
          </a>
          <a href="#profile" className="profile-link">
            <img
              src="./img/Mart-5.jpg"
              alt="Profile Icon"
              className="profile-icon"
            />
            <span className="profile-name">Are Martins</span>
          </a>
        </div>
      </div>

      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
        <div className="horizontal-line2"></div>
      </div>

      <div className="status-header">
        <h2>Admission Application Status</h2>
      </div>

      <div className="progress-steps">
        <div className="step completed">
          <span className="step-number">1</span>
          <span className="step-name">Submitted</span>
        </div>
        <div className="step completed">
          <span className="step-number">2</span>
          <span className="step-name">Under Review</span>
        </div>
        <div className="step completed">
          <span className="step-number">3</span>
          <span className="step-name">Decision Made</span>
        </div>
        <div className="step completed">
          <span className="step-number">4</span>
          <span className="step-name">Pending Approval</span>
        </div>
        <div className="step">
          <span className="step-number">5</span>
          <span className="step-name">Approved</span>
        </div>
      </div>

      <div className="status-message">
        <p>
          We're happy to inform you that your application documents have been
          approved!
          <br />
          However, we noticed you also requested a course change to [Zoology]
          (previously applied for [Original Course Name]).
          <br />
          Since course changes require additional review, we haven't finalized
          your program yet. Our admissions team is currently evaluating your
          request to ensure it aligns with your qualifications and program
          availability.
        </p>
      </div>
    </div>
  );
};

const ReviewPage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src="./img/logo.png" alt="Logo" />
        <div className="right">
          <a href="#mail" className="icon-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#notifications" className="icon-link">
            <i className="fas fa-bell"></i>
          </a>
          <a href="#profile" className="profile-link">
            <img
              src="./img/Mart-5.jpg"
              alt="Profile Icon"
              className="profile-icon"
            />
            <span className="profile-name">Are Martins</span>
          </a>
        </div>
      </div>

      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
        <div className="horizontal-line2"></div>
      </div>

      <div className="status-header">
        <h2>Admission Application Status</h2>
      </div>

      <div className="progress-steps">
        <div className="step completed">
          <span className="step-number">1</span>
          <span className="step-name">Submitted</span>
        </div>
        <div className="step completed">
          <span className="step-number">2</span>
          <span className="step-name">Under Review</span>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <span className="step-name">Decision Made</span>
        </div>
        <div className="step">
          <span className="step-number">4</span>
          <span className="step-name">Approved</span>
        </div>
        <div className="step">
          <span className="step-number">5</span>
          <span className="step-name">Accepted</span>
        </div>
      </div>

      <div className="status-message">
        <p>
          Your document has been submitted for review. You'll receive an email
          notification once a decision is made. While you wait, feel free to
          explore our <a href="#">page</a>.
        </p>
      </div>
    </div>
  );
};

const SubmittedPage = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src="../assets/img/logo.png" alt="Logo" />
        <div className="right">
          <a href="#mail" className="icon-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#notifications" className="icon-link">
            <i className="fas fa-bell"></i>
          </a>
          <a href="#profile" className="profile-link">
            <img
              src="../assets/img/Mart-5.jpg"
              alt="Profile Icon"
              className="profile-icon"
            />
            <span className="profile-name">Are Martins</span>
          </a>
        </div>
      </div>

      <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
        <div className="horizontal-line2"></div>
      </div>

      <div className="status-header">
        <h2>Congratulations, your details have been submitted successfully!</h2>
      </div>

      <div className="status-message">
        <p>
          You're almost there, please <a href="#">click here</a> to track your
          admission processes
        </p>
      </div>
    </div>
  );
};

const ProcessingPage = () => {
  const [screening, setScreening] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const token = sessionStorage.getItem("userToken");

  const getScreening = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${ipAddress}/user/screeningInfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setScreening(data.screeningRecord);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getScreening();
  }, []);

  if (isLoading) return <div>Loading....</div>;

  if (submitted) return <SubmittedPage />;
};

export default ProcessingPage;

// export { ApprovedPage, StatusPage, PendingPage, ReviewPage, SubmittedPage };
