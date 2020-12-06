import React from 'react';
import ReactDOM from 'react-dom';

function Reactact(){

  const arr=[1,2,3,4,5];
  const newarr=arr.map((val,index)=>{
    // return val;
    // map() function is used to iterate through array and list 
    return <li key={index}>{val+1}</li>;
  });

  console.log(arr);
 return(
   <>
   <h1>Hello</h1>
   <ul>{newarr}</ul>
   </>
 )
  
}

ReactDOM.render(<Reactact/>,document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
