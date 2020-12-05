import React from 'react';

function MemoComp({name}){

    console.log("Momo Rendering");
    return(
     <>
     <h1>{name}</h1>
     </>

    );
}

export default React.memo(MemoComp);