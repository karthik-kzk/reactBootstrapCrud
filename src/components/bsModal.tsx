import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props: any) {
    const [inputs, setInputs] = useState<any>({name:props.data.name,dept:props.data.dept,email:props.data.email});
    const [lData, setLdata] = useState<any>([]);
    function handleSubmit(e: any) {
        props.submit(true)
        e.preventDefault();
        let value = lData
        value[props.index]=inputs
        const data = JSON.stringify(value);
        localStorage.setItem("data", data);
        props.onHide();
        setInputs({ name: "", dept: "", email: "" });
    }

    function handleChange(e: any) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value });
    }
    function getData() {
        const data = JSON.parse(localStorage.getItem("data") || "[]")
        setLdata(data);
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Modal
            {...props}
            size="md-3"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                        name="name"
                        value={inputs.name || ""}
                        onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Dept</label>
                    <input type="text"
                        name="dept"
                        value={inputs.dept || ""}
                        onChange={handleChange} className="form-control" ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange} className="form-control" aria-describedby="emailHelp"></input>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-light" onClick={props.onHide}>Close</button>
                <button type="submit" className="btn  btn-secondary" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
            </Modal.Footer>
        </Modal>
    );
}


export default MyVerticallyCenteredModal;
