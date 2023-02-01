import React from "react";

const Add = ({empName, empAddress, empPosition,setEmpName,setEmpAddress,setEmpPosition, handleSubmit}) => {
  return (
    <main className="Add">
      <form onSubmit={(e)=>handleSubmit(e)}>
        Name:
        <input type="text" value={empName} onChange={(e)=>setEmpName(e.target.value)} />
        <br />
        Address: <input type="text" value={empAddress} onChange={(e)=>setEmpAddress(e.target.value)}/>
        <br />
        Position: <input type="text" value={empPosition} onChange={(e)=>setEmpPosition(e.target.value)} />
        <br />
        <button type="submit">submit</button>
      </form>
    </main>
  );
};

export default Add;
