import React,{memo} from "react";

const Child = ({name,datas,displayDetail}) =>{

    console.log('render =======>',name)
    return(
        <>
        <h1> My Name is : {name}</h1>
        {JSON.stringify(datas)}
        <br />
        {displayDetail()}
        </>
    )
}

export default memo(Child);