import React from "react";
import { Link } from "react-router-dom";
const Employee = ({ employee }) => {
  return (
    <article className="employee">
      <Link to={`employee/${employee.id}`}>
        <p>{employee.id}</p>
        <p>{employee.name}</p>
      </Link>
    </article>
  );
};

export default Employee;
