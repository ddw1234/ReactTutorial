import {useState} from 'react';

function useCustomHook(){

    const[salary,setSalary]=useState(0);

    const incrementsalary=()=>{

        setSalary(salary + 500);
    }

    return {salary,incrementsalary};
}

export default useCustomHook;