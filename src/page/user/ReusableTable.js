import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ReusableTable = ({ tableColumns, tableData, setTableData }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [description, setDescription] = useState('');
    const [itemIndex,setItemIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault("");
        let userData = {
            name,
            email,
            phoneNo,
            description,
        }
        if(itemIndex !==null){
            // console.log('itemIndex ======>',itemIndex)
           setTableData((pre) => pre.map((item,i) => i === itemIndex ? userData :item))
           setItemIndex(null)
        //    setTableData((prev) => prev.map((item, i) => (i === itemIndex ? userData : item)));
         
        
          
        }else{
            setTableData((pre) => [...pre, userData])
        }
       

        setEmail('');
        setName('');
        setPhoneNo('');
        setDescription('')

    }

    const handleDelete = (index) =>{
        setTableData((pre) => pre.filter((item,i) => i !==index))
    }

    const handleEdit =(item,index) =>{
        setItemIndex(index)
        setModal(!modal);
        setName(item.name)
        setEmail(item.email)
        setDescription(item.description)
        setPhoneNo(item.phoneNo)
    }

    console.log('itemIndex =>',itemIndex)

    return (
        <>
            {/* 
<ToastContainer /> */}
            <Modal isOpen={modal} fade={false} toggle={toggle}>

                <ModalHeader toggle={toggle}> Add User </ModalHeader>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <ModalBody>

                        <div className="col">

                            {/* Title input */}
                            <div className="mb-3">
                                <label className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone No:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Phone No"
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Description input */}
                            <div className="mb-3">
                                <label>Description:</label>
                                <textarea
                                    className="form-control"
                                    rows={5}
                                    placeholder="Enter Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>



                        </div>
                    </ModalBody>
                    <ModalFooter>

                        {/* <Button color="btn btn-primary" onClick={toggle}> */}
                        <Button type="submit" color="btn btn-primary" onClick={toggle} >
                            Submit
                        </Button>
                    </ModalFooter>
                </form>
            </Modal>

            <div className="container">

                <div className="card mt-5 mb-5">

                    <div className="card-header"> <span>   User List</span>
                        <span>

                            <button type="button" className="btn btn-outline-primary  float-end" onClick={toggle}> Add User  </button>

                        </span>
                    </div>

                    <div className="card-body">

                        <table class="table table-bordered table-sm">
                            <thead>
                                <tr>

                                    {tableColumns.map((tableCol) => (<> <th> {tableCol}</th> </>))}

                                </tr>
                            </thead>
                            <tbody>
                                {tableData.length > 0 ? tableData.map((item, index) => (
                                    <>
                                        <tr key={index}>
                                            <td> {item.name} </td>
                                            <td> {item.email} </td>
                                            <td> {item.phoneNo} </td>
                                            <td> {item.description} </td>
                                            <td>
                                                <button className="btn btn-sm btn-warning" onClick={(e) => handleEdit(item,index)}> Edit </button> &nbsp; &nbsp;
                                                <button className="btn btn-sm btn-danger" onClick={(e) => handleDelete(index)}> Delete </button>
                                            </td>
                                        </tr>
                                    </>
                                )) : (
                                    <>
                                        <tr>
                                            <td colSpan={5} className="text-center"> No Records </td>
                                        </tr>
                                    </>
                                )}



                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer">Footer</div>
            </div>



        </>
    )
}

export default ReusableTable;


// import React, { useState } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// const ReusableTable = ({ tableColumns, tableData, setTableData }) => {

//     const [modal, setModal] = useState(false);
//     const toggle = () => setModal(!modal);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNo, setPhoneNo] = useState('');
//     const [description, setDescription] = useState('');
//     const [itemIndex, setItemIndex] = useState(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const userData = { name, email, phoneNo, description };

//         if (itemIndex !== null) {
//             setTableData((prev) => 
//                 prev.map((item, i) => (i === itemIndex ? userData : item))
//             );
//         } else {
//             setTableData((prev) => [...prev, userData]);
//         }

//         // Reset form fields
//         setEmail('');
//         setName('');
//         setPhoneNo('');
//         setDescription('');
//         setItemIndex(null);
//         toggle(); // Close the modal after submission
//     };

//     const handleDelete = (index) => {
//         setTableData((prev) => prev.filter((item, i) => i !== index));
//     };

//     const handleEdit = (item, index) => {
//         setItemIndex(index);
//         setName(item.name);
//         setEmail(item.email);
//         setPhoneNo(item.phoneNo);
//         setDescription(item.description);
//         setModal(true); // Open modal for editing
//     };

//     return (
//         <>
//             <Modal isOpen={modal} fade={false} toggle={toggle}>
//                 <ModalHeader toggle={toggle}>Add/Edit User</ModalHeader>
//                 <form encType="multipart/form-data" onSubmit={handleSubmit}>
//                     <ModalBody>
//                         <div className="col">
//                             <div className="mb-3">
//                                 <label className="form-label">Name:</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Enter Name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Email:</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Enter Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Phone No:</label>
//                                 <input
//                                     type="tel"
//                                     className="form-control"
//                                     placeholder="Enter Phone No"
//                                     value={phoneNo}
//                                     onChange={(e) => setPhoneNo(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <label>Description:</label>
//                                 <textarea
//                                     className="form-control"
//                                     rows={5}
//                                     placeholder="Enter Description"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     required
//                                 ></textarea>
//                             </div>
//                         </div>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button type="submit" color="primary">
//                             Submit
//                         </Button>
//                     </ModalFooter>
//                 </form>
//             </Modal>

//             <div className="container">
//                 <div className="card mt-5 mb-5">
//                     <div className="card-header">
//                         <span>User List</span>
//                         <span>
//                             <button
//                                 type="button"
//                                 className="btn btn-outline-primary float-end"
//                                 onClick={toggle}
//                             >
//                                 Add User
//                             </button>
//                         </span>
//                     </div>

//                     <div className="card-body">
//                         <table className="table table-bordered table-sm">
//                             <thead>
//                                 <tr>
//                                     {tableColumns.map((tableCol, index) => (
//                                         <th key={index}>{tableCol}</th>
//                                     ))}
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {tableData.length > 0 ? (
//                                     tableData.map((item, index) => (
//                                         <tr key={index}>
//                                             <td>{item.name}</td>
//                                             <td>{item.email}</td>
//                                             <td>{item.phoneNo}</td>
//                                             <td>{item.description}</td>
//                                             <td>
//                                                 <button
//                                                     className="btn btn-sm btn-warning"
//                                                     onClick={() => handleEdit(item, index)}
//                                                 >
//                                                     Edit
//                                                 </button>
//                                                 &nbsp; &nbsp;
//                                                 <button
//                                                     className="btn btn-sm btn-danger"
//                                                     onClick={() => handleDelete(index)}
//                                                 >
//                                                     Delete
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td colSpan={tableColumns.length + 1} className="text-center">
//                                             No Records
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div className="card-footer">Footer</div>
//             </div>
//         </>
//     );
// };

// export default ReusableTable;
