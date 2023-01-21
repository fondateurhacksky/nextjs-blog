import Style from '../styles/persons.module.css';
import Card from './Card';
import FormH from './Formh';
import { useState } from 'react';


const Person = () => {

    const [data, setData] = useState([]); // Initialise un hook useState pour gérer les données à afficher dans Card

    return(
        <div className={Style.container}>
            <div className={Style.divBar}></div>
            <FormH updateData={setData} Data={data}/>
            <div className={Style.main}>
                <Card data={data} />
            </div>
        </div>
    )
}

export default Person