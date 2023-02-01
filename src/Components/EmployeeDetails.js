import React from "react";
import { useParams, Link } from "react-router";

const EmployeeDetails = ({ employees }) => {
  const id = useParams().id;
  console.log(useParams().id);

  const emp = employees.find((employee) => employee.id === parseInt(id));

  return (
    <main>
      <h2>Name :{emp.name} </h2>
      <p>Address: {emp.address}</p>
      <p>Position: {emp.position}</p>
    </main>
  );
};

export default EmployeeDetails;
