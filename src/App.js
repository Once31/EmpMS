import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Add from "./Components/Add";
import Missing from "./Components/Missing";
import Layout from "./Layout";
import EmployeeDetails from "./Components/EmployeeDetails";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ajay",
      address: "Nashik",
      position: "admin",
    },
    {
      id: 2,
      name: "Gaurav",
      address: "Nashik",
      position: "backend",
    },
    {
      id: 3,
      name: "Chinmay",
      address: "Nashik",
      position: "design",
    },
    {
      id: 4,
      name: "Jayesh",
      address: "Nashik",
      position: "software devloper",
    },
  ]);

  const [empName, setEmpName] = useState("");
  const [empAddress, setEmpAddress] = useState("");
  const [empPosition, setEmpPosition] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const id = employees.length ? employees[employees.length - 1].id + 1 : 1;

    const newEmp = {
      id: id,
      name: empName,
      address: empAddress,
      position: empPosition,
    };

    const updatedEmp = [...employees, newEmp];
    setEmployees(updatedEmp);
    setEmpName("");
    setEmpAddress("");
    setEmpPosition("");
    navigate("/");
  };

  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterEmployees = employees.filter((employee) => employee.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filterEmployees);
    console.log(filterEmployees);
  }, [employees, search]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Layout search={search} setSearch={setSearch} />}
        >
          <Route index element={<Home employees={searchResults} />} />

          <Route path="employee">
            <Route
              index
              element={
                <Add
                  empName={empName}
                  empAddress={empAddress}
                  empPosition={empPosition}
                  setEmpName={setEmpName}
                  setEmpAddress={setEmpAddress}
                  setEmpPosition={setEmpPosition}
                  handleSubmit={handleSubmit}
                />
              }
            />
            <Route
              path=":id"
              element={<EmployeeDetails employees={employees} />}
            />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
