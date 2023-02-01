import React from "react";
import Feed from "./Feed";
const Home = ({ employees }) => {
  return (
    <main className="Home">
      {employees.length ? (
        <>{<Feed employees={employees} />}</>
      ) : (
        <p>nothing to show</p>
      )}
    </main>
  );
};

export default Home;
