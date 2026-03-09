import React, { useState } from "react";
import axios from "axios";

function Attendance() {

  const [data, setData] = useState({
    employee_id: "",
    date: "",
    status: "Present"
  });

  const [records, setRecords] = useState([]);

  const submitAttendance = () => {

    axios.post("https://hrms-lite-jftm.onrender.com/attendance", data)
      .then(() => {
        alert("Attendance Marked");
      });

  };

  const getAttendance = () => {

    axios.get("https://hrms-lite-jftm.onrender.com/${data.employee_id}")
      .then(res => {
        setRecords(res.data);
      });

  };

  return (
    <div>

      <h2>Mark Attendance</h2>

      <input
        placeholder="Employee ID"
        onChange={e => setData({ ...data, employee_id: e.target.value })}
      />

      <br/>

      <input
        type="date"
        onChange={e => setData({ ...data, date: e.target.value })}
      />

      <br/>

      <select
        onChange={e => setData({ ...data, status: e.target.value })}
      >
        <option>Present</option>
        <option>Absent</option>
      </select>

      <br/>

      <button onClick={submitAttendance}>
        Submit
      </button>

      <br/><br/>

      <button onClick={getAttendance}>
        View Attendance
      </button>

      <ul>
        {records.map(r => (
          <li key={r.id}>
            {r.date} - {r.status}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Attendance;