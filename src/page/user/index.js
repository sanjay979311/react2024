import React from "react";
import { useParams } from "react-router-dom";

const User = () =>{
    const {userid} = useParams()
    console.log('use PArams', userid)
    return(
        <>
        <h1> User Id : {userid} </h1>
        </>
    )
}

export default User;