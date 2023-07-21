import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
const axios =require('axios') ;

function EditModal(props: any) {
    const [inputs, setInputs] = useState<any>({name:props.data.name,department:props.data.department,email:props.data.email,id:props.data.id});
    const [lData, setLdata] = useState<any>([]);
  async  function handleSubmit(e: any) {
        props.submit(true)
        e.preventDefault();
        await updateData(inputs.id,inputs);
        // let value = lData
        // value[props.index]=inputs
        // const data = JSON.stringify(value);
        // localStorage.setItem("data", data);
        props.onHide();
        setInputs({ name: "", department: "", email: "",id:"" });
    }

    function handleChange(e: any) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({ ...inputs, [name]: value });
    }
    async  function getData(){
        try {
            const response = await axios.get('http://localhost:8080/student');
          //   console.log(response.data);
          setLdata(response.data);
  
          } catch (error) {
            console.error(error);
          }
      
    }
    async  function updateData(id:number,data:any){
        try {
            const response = await axios.put(`http://localhost:8080/student/${id}`,data);
          //   console.log(response.data);
          setLdata(response.data);
  
          } catch (error) {
            console.error(error);
          }
      
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
                    Edit student
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
                    <label className="form-label">department</label>
                    <input type="text"
                        name="department"
                        value={inputs.department || ""}
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


export default EditModal;
