import { useEffect, useState } from "react";
import DeleteModal from "./DeleteModel";

import MyVerticallyCenteredModal from "./bsModal";

function Table(props: any) {

    const [select, setSelect] = useState();
    const [upDateIndex, setUpdateIndex] = useState(-1);
    const [update, setUpdate] = useState(false);

    function handleDelete(e: any) {
        // console.log(e.target.parentElement.id,"delete")
        setSelect(e.target.parentElement.id);
    }
    function handleEdit(e: any) {
        console.log(e.target.parentElement.value, "edit")

        e.target.parentElement.value && setUpdateIndex(e.target.parentElement.value);
        setTimeout(() => { setUpdate(true); }, 100)
    }
    function handleEditClose(e: any) {
        console.log(e, "ee")
        setUpdateIndex(-1);
        setUpdate(false);
    }


    function callback(value: boolean) {
        // console.log(value)
        value && props.delete(select)
    }
    function handleEditSubmit(value: boolean) {
        // console.log(value)
        props.edit(true)
    }



    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sno</th>
                        <th scope="col">Name</th>
                        <th scope="col">Dept</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((val: any, i: number) => {
                        return <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{val.name}</td>
                            <td>{val.dept}</td>
                            <td>{val.email}</td>
                            <td>
                                <button className="btn" style={{ padding: "3px" }} onClick={handleDelete} id={val.name} data-bs-toggle="modal" data-bs-target="#deleteModal">
                                    <i className="bi bi-trash-fill"  ></i>
                                </button>

                                <button className="btn" style={{ padding: "3px" }} value={i} onClick={handleEdit}

                                >
                                    <i
                                        className="bi bi-pencil-square"
                                    ></i>

                                </button>

                                {update && <MyVerticallyCenteredModal show={update} onHide={handleEditClose} data={props.data[upDateIndex]} submit={handleEditSubmit} index={upDateIndex} />}
                                <DeleteModal callback={callback} />


                            </td>

                        </tr>

                    })}
                </tbody>
            </table>

        </div>
    );
}

export default Table;


// [{name: "sam", dept: "Admin", email: "admin@gmail.com"},
// {name: "nathan", dept: "IT", email: "it@gmail.com"},
// {name: "adjith", dept: "HR", email: "hr@gmail.com"}]