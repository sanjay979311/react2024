import React, { useState,useMemo,useCallback } from "react";
import Child from "./Child";


const MemoParent = () => {

    const [counter, setCounter] = useState(0);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    let datas = useMemo(() => [1,2,3,4],[])

    const displayDetail = useCallback(() =>{
        return fullName
    },[fullName])

    return (
        <>
            <div className="container">
                <div className="container">
                    <button className="btn btn-info"> {counter} </button>
                    <br />  <br />
                    <form>

                        <div className="form-group">

                            <input type="text" className="form-control" placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <br />

                        <div className="form-group">

                            <input type="email" className="form-control" id="exampleInputEmail1"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>


                        <br />

                    </form>
                    <button onClick={() => setCounter((pre) => pre + 1)} className="btn btn-primary"> Click  </button>
                    {/* <Child  name={fullName} datas={datas} displayDetail={displayDetail}  /> */}
                    <Child name={fullName} displayDetail={displayDetail} datas={datas} />
                </div>
            </div>
        </>
    )
}

export default MemoParent