const data = [
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
  {
    name: "Trent Alexander Arnold",
    faculty: "Sciences",
    course: "Software Engineering",
    date: "27/5/24",
  },
];
const Admin = () => {
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

      <div className="screening-dashboard">
        <h3>Screening Dashboard</h3>
        <div className="horizontal-line3"></div>
        <div className="filter-sort">
          <input type="text" placeholder="Filter by keywords..." />
          <div className="sort-by">
            <span>Sort by:</span>
            <select>
              <option value="most-recent">Most Recent</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name :</th>
              <th>Faculty :</th>
              <th>Course :</th>
              <th>Date Submitted :</th>
              <th>View :</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {data.map((row) => (
              <>
                <td>
                  <img
                    src="../img/Mart-5.jpg"
                    alt="Profile Picture"
                    className="profile-pic"
                  />{" "}
                  ${row.name}
                </td>
                <td>${row.faculty}</td>
                <td>${row.course}</td>
                <td>${row.date}</td>
                <td>
                  <img
                    src="../img/view-icon.png"
                    alt="View"
                    className="view-icon"
                  />
                </td>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
