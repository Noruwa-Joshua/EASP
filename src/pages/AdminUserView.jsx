const UserView = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img src="../img/logo.png" alt="Logo" />
        <div className="right">
          <a href="#mail" className="icon-link">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="#notifications" className="icon-link">
            <i className="fas fa-bell"></i>
          </a>
          <a href="#profile" className="profile-link">
            <img
              src="../img/Mart-5.jpg"
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

      <div className="pi">
        <h2>Prospective Student Details</h2>
        <div className="main">
          <img src="../img/Mart-5.jpg" alt="" />
          <div className="info">
            <h2>Efosa Clash of Clan</h2>
            <div className="dep">
              <div className="className">
                <h5>Email</h5>
                <h4>someone@gmail.com</h4>
              </div>
              <div className="className">
                <h5>Faculty</h5>
                <h4>LAW</h4>
              </div>
              <div className="className">
                <h5>Course</h5>
                <h4>social engineering</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="application-form">
        <form
          action="submit_form.php"
          method="post"
          enctype="multipart/form-data"
        >
          <div className="p2">
            <div className="upload-group">
              <label htmlFor="application-form">Printed application form</label>
              <br />
              <button type="button">View</button>
              <select name="accept_application_form">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>

            <div className="upload-group">
              <label htmlFor="receipt">Photocopy of receipt</label>
              <br />
              <button type="button">View</button>
              <select name="accept_application_form">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>
            <div className="upload-group">
              <label htmlFor="clergy-referral">
                Referral letter from a clergy
              </label>
              <br />
              <button type="button">View</button>
              <select name="accept_application_form">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>
            <div className="upload-group">
              <label htmlFor="civil-servant-referral">
                Referral letter from a civil servant not below level 12
              </label>
              <br />
              <button type="button">View</button>
              <select name="accept_application_form">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>
            <div className="upload-group">
              <label htmlFor="credentials">
                Original copies of credentials (at not more than one sitting)
              </label>
              <br />
              <button type="button">View</button>
              <select name="accept_application_form">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>
            <div className="upload-group">
              <label htmlFor="utme-result">
                UTME result print out with picture
              </label>
              <br />
              <button type="button">View</button>
              <select name="accept_application_form">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>
            <div className="upload-group">
              <label htmlFor="birth-certificate">
                Photocopy of birth certificate/Sworn Declaration of age
              </label>
              <br />
              <button type="button">View</button>
              <select name="accept_application_form">
                <option value="accept">Accept</option>
                <option value="reject">Reject</option>
              </select>
            </div>
          </div>

          <h3>O’Level Result (WAEC/NECO)</h3>
          <div className="p3">
            <div className="subject-group">
              <input
                type="text"
                name="subject1"
                value="Use of English"
                readOnly
              />
              <input type="text" name="grade1" value="B2" readOnly />
            </div>
            <div className="subject-group">
              <input type="text" name="subject2" value="Mathematics" readOnly />
              <input type="text" name="grade2" value="B2" readOnly />
            </div>
            <div className="subject-group">
              <input type="text" name="subject3" value="Chemistry" readOnly />
              <input type="text" name="grade3" value="B2" readOnly />
            </div>
            <div className="subject-group">
              <input type="text" name="subject4" value="Biology" readOnly />
              <input type="text" name="grade4" value="B2" readOnly />
            </div>
            <div className="subject-group">
              <input type="text" name="subject5" value="Agriculture" readOnly />
              <input type="text" name="grade5" value="B2" readOnly />
            </div>
            <div id="result">
              <label htmlFor="total-score-olevel">GRADE POINT SCORE</label>
              <input
                type="number"
                id="total-score-olevel"
                value="33"
                name="total_score_olevel"
                readOnly
              />
            </div>
          </div>

          <h3>UTME Result</h3>
          <div className="p4">
            <div className="subject-group">
              <input
                type="text"
                name="subject_utme1"
                value="Use of English"
                readOnly
              />
              <input type="number" name="score_utme1" value="67" readOnly />
            </div>
            <div className="subject-group">
              <input
                type="text"
                name="subject_utme2"
                value="Mathematics"
                readOnly
              />
              <input type="number" name="score_utme2" value="67" readOnly />
            </div>
            <div className="subject-group">
              <input
                type="text"
                name="subject_utme3"
                value="Chemistry"
                readOnly
              />
              <input type="number" name="score_utme3" value="67" readOnly />
            </div>
            <div className="subject-group">
              <input
                type="text"
                name="subject_utme4"
                value="Biology"
                readOnly
              />
              <input type="number" name="score_utme4" value="67" readOnly />
            </div>

            <div id="result">
              <label htmlFor="total-score-utme">TOTAL SCORE FOR UTME</label>
              <input type="number" id="total-score-utme" value="267" readOnly />
            </div>
            <div id="result">
              <label htmlFor="weight-of-utme-score">WEIGHT OF UTME SCORE</label>
              <input
                type="number"
                id="weight-of-utme-score"
                value="31.1"
                readOnly
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserView;
