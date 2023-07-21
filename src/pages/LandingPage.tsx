

import { useEffect, useState } from 'react';
import CreateModel from '../components/CreateModel';
import DeleteModal from '../components/DeleteModel';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import axios from 'axios';


function LandingPage() {

    const [data, setData] = useState([]);
    const [submit, setSubmit] = useState(true);

    function handleSubmit(value:boolean){
     
        setSubmit(!submit)
    }
   async function handleDelete(value:number){
        try {
            const response = await axios.delete(`http://localhost:8080/student/${value}`);
          } catch (error) {
            console.error(error);
          }
        setSubmit(!submit)
    }
    function handleEdit(value:boolean){
        setSubmit(!submit)
    }

    async function getData() {
        try {
          const response = await axios.get('http://localhost:8080/student');
     
          setData(response.data);

        } catch (error) {
          console.error(error);
        }

        }

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        getData();
    }, [submit])

    return <>
        <Navbar body={<><CreateModel submit={handleSubmit}/>{data && <Table data={data} delete={handleDelete} edit={handleEdit}/>}
            <DeleteModal />
        </>} />
    </>
}

export default LandingPage;