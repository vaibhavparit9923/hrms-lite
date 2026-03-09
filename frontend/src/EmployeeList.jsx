import React, { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = () => {
    axios.get("https://hrms-lite-jftm.onrender.com/employees")
      .then(res => {
        setEmployees(res.data);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = (id) => {
    axios.delete(`https://hrms-lite-jftm.onrender.com/employees/${id}`)
      .then(() => {
        alert("Employee deleted");
        fetchEmployees();
      });
  };

  return (
    <div>

      <h2>Employee List</h2>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.employee_id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>

              <td>
                <button onClick={() => deleteEmployee(emp.id)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;