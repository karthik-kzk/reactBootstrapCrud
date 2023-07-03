

import { useEffect, useState } from 'react';
import Button from '../components/Button';
import DeleteModal from '../components/DeleteModel';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import axios from 'axios';


function LandingPage() {

    const [data, setData] = useState([]);
    const [submit, setSubmit] = useState(true);

    function handleSubmit(value:boolean){
        setSubmit(value&&!submit)
    }
    function handleDelete(value:string){
        let newData =data.filter((e:any)=>e.name!==value);
        console.log(newData)
       localStorage.setItem("data",JSON.stringify(newData)) 
        setSubmit(!submit)
    }
    function handleEdit(value:boolean){
        setSubmit(value&&!submit)
    }

    async function getData() {
        // try {
        //   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // //   console.log(response.data);
        //   setData(response.data);

        // } catch (error) {
        //   console.error(error);
        // }

        const data = JSON.parse(localStorage.getItem("data") || "")
        console.log(data)
        setData(data);

    }

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        getData();
    }, [submit])

    return <>
        <Navbar body={<><Button submit={handleSubmit}/>{data && <Table data={data} delete={handleDelete} edit={handleEdit}/>}
            <DeleteModal />
        </>} />
    </>
}

export default LandingPage;