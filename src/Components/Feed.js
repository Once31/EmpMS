import React from "react";
import Employee from "./Employee";
const Feed = ({ employees }) => {
  return (
    <>
      
      {employees.map((employee) => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </>
  );
};

export default Feed;
