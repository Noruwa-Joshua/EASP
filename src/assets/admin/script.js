document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.getElementById("table-body");

    const data = [
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
        {name: "Trent Alexander Arnold", faculty: "Sciences", course: "Software Engineering", date: "27/5/24"},
    ];

    data.forEach(row => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><img src="../img/Mart-5.jpg" alt="Profile Picture" class="profile-pic"> ${row.name}</td>
            <td>${row.faculty}</td>
            <td>${row.course}</td>
            <td>${row.date}</td>
            <td><img src="../img/view-icon.png" alt="View" class="view-icon"></td>
        `;

        tableBody.appendChild(tr);
    });
});
