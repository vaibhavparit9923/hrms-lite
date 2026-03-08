import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import Attendance from "./Attendance";

function App() {

  return (
    <div>

      <h1>HRMS Lite Dashboard</h1>

      <AddEmployee />

      <EmployeeList />

      <Attendance />

    </div>
  );

}

export default App;