import Style from '../styles/persons.module.css';
import { useState } from 'react';
import AppCart from './AppCart';


const Person = () => {
    const [data, setData] = useState([]); 

    return(
        <div className={Style.main}>
            <div className={Style.divBar}></div>
            <AppCart data={data} updateData={setData} Data={data}/>
        </div>
    )
}

export default Person