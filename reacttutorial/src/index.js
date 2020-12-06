import React from 'react';
import ReactDOM from 'react-dom';
import useCustomHook from './custom';

function Employee(){
  const data=useCustomHook();

  return(
    <>
    <h1>Employee Details</h1>
    <h1>User salary is {data.salary}</h1>
    <button onClick={data.incrementsalary}>Increment Salary</button>
    </>
  )

}
ReactDOM.render(<Employee/>,document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
