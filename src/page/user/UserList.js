import React, { useState } from "react";
import ReusableTable from "./ReusableTable";

const UserList = () => {

    let tableColumns =  ['Id','Name','Email','Description',"Options"]

    const [tableData,setTableData] = useState([])
    return (
        <>
           

            <ReusableTable tableColumns={tableColumns} tableData={tableData} setTableData={setTableData}  />



        </>
    )
}

export default UserList;