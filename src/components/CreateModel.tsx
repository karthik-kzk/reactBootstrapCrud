import { useEffect, useState } from "react";
const axios =require('axios') ;


function CreateModel(props:any) {

    const [inputs,setInputs]=useState<any>({name:"",department:"",email:""});
    const [lData,setLdata]=useState<any>([]);
    const [error,setError]=useState<any>({name:true,email:true})
 async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
   props.submit(true);
   e.preventDefault();

   // post
   await postData(inputs);
   setInputs({ name: "", department: "", email: "" });
   setError({ name: true, email: true });
 }

    function handleChange(e:any){
            const name =e.target.name;
            const value =e.target.value;         
            if(name==="email"){
                console.log(/\S+@\S+\.\S+/.test(value))
                if(!(/\S+@\S+\.\S+/.test(value))){
                    setError({...error,email:true})
                }else{
                    setError({...error,email:false})
                } 
            } else if(name==="name"){
                
                if(value.length<4){
                    setError({...error,name:true})
                }else{
                    setError({...error,name:false})
                } 
            }
            
               console.log(error,"error") 
           
            setInputs({...inputs,[name]:value});
    }
    // getAll
   async  function getData(){
        try {
            const response = await axios.get('http://localhost:8080/student');
          //   console.log(response.data);
          setLdata(response.data);
  
          } catch (error) {
            console.error(error);
          }
      
    }
   async  function postData(data:any){
        try {
            console.log(data,"data")
            const response = await axios.post(`http://localhost:8080/student`,data);
            console.log(response,"response");
    
  
          } catch (error) {
            console.error(error,"axios");
          }
      
    }

    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
        getData()
    },[inputs])
   

    return <div className="float-end">
        <button className="btn  btn-secondary" data-bs-toggle="modal" data-bs-target="#myModal" >Create New Student</button>
        <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">New Student</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label  className="form-label">Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp"
                                name="name"
                                value={inputs.name||""}
                                onChange={handleChange} required></input>
                                {error.name&&<small className="form-text text-danger">Name is required</small>}
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">department</label>
                                <input type="text" 
                                name="department"
                                value={inputs.department||""}
                                onChange={handleChange} className="form-control" ></input>
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input type="email"
                                name="email"
                                value={inputs.email||""}
                                onChange={handleChange} className="form-control "  aria-describedby="emailHelp" required></input>
                                {error.email&&<small className="form-text text-danger">Please enter a correct email address.</small>}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn  btn-secondary" data-bs-dismiss="modal" onClick={handleSubmit} disabled={error.name}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CreateModel;