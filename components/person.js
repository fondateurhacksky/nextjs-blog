import Style from '../styles/persons.module.css';
import Card from './Card';
import FormH from './Formh';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Person = () => {


    const [data, setData] = useState([]); // Initialise un hook useState pour gérer les données à afficher dans Card

    useEffect(() => {
        axios.get('/api/persons/data')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return(
        <div className={Style.container}>
            <div className={Style.divBar}></div>
            <FormH updateData={setData} />
            <div className={Style.main}>
                <Card data={data} />
            </div>
        </div>
    )
}

export default Person