import React, { useState } from "react";
import axios from "axios";

function AddEmployee() {

  const [form, setForm] = useState({
    employee_id: "",
    name: "",
    email: "",
    department: ""
  });

  const handleSubmit = () => {

    axios.post("https://hrms-lite-jftm.onrender.com/employees", form)
    
      .then(() => {
        alert("Employee Added Successfully");
      });

  };

  return (
    <div>

      <h2>Add Employee</h2>

      <input
        placeholder="Employee ID"
        onChange={e => setForm({ ...form, employee_id: e.target.value })}
      />

      <br/>

      <input
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <br/>

      <input
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <br/>

      <input
        placeholder="Department"
        onChange={e => setForm({ ...form, department: e.target.value })}
      />

      <br/>

      <button onClick={handleSubmit}>Add Employee</button>

    </div>
  );
}

export default AddEmployee;