import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

function Employee(){

    const [name,setName]=useState("Dinesh");
    const [empid,setEmpid]=useState("emp01");
    const [age,setAge]=useState("20");

    const clickHandler= ()=>{
      setName(name);
      setEmpid(empid);
      setAge(age-1);
    }

    const clickHandler1= ()=>{
        setName(name);
        setEmpid(empid + 1);
      }

  useEffect(()=>{console.log("UseEffect Rendering")},[age]);
    return(
    <>
    <h1>Employee Details</h1>
    <h1>Your name : {name}</h1>
    <h1>Your empid : {empid}</h1>
    <h1>Your age : {age}</h1>

    <button onClick={clickHandler}>Click me</button>
    <button onClick={clickHandler1}>Click me</button>
    </>
    );
}
ReactDOM.render(<Employee/>,document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
