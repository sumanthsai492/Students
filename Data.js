
    document.addEventListener("DOMContentLoaded", function () {
      
      let Students = [];
      const StudentForm = document.getElementById("StudentForm");
      const StudentBody = document.getElementById("StudentBody");

      function StudentData(event) {
        event.preventDefault();
        const StudentName = document.getElementById("Name").value;
        const StudentAge = document.getElementById("Age").value;
        const StudentGrade = document.getElementById("Grade").value;
        const StudentCity = document.getElementById("City").value;
        const Student = [StudentName, StudentAge, StudentGrade, StudentCity];
        Students.push(Student);
        StudentForm.reset();
        updateTable();
      }

      function updateTable() {
        StudentBody.innerHTML = "";

        Students.forEach((Student) => {
          const row = document.createElement("tr");
          const nameCell = document.createElement("td");
          const ageCell = document.createElement("td");
          const gradeCell = document.createElement("td");
          const cityCell = document.createElement("td");

          nameCell.textContent = Student[0];
          ageCell.textContent = Student[1];
          gradeCell.textContent = Student[2];
          cityCell.textContent = Student[3];

          row.appendChild(nameCell);
          row.appendChild(ageCell);
          row.appendChild(gradeCell);
          row.appendChild(cityCell);

          StudentBody.appendChild(row);
        });
      }

      StudentForm.addEventListener("submit", StudentData);
    });