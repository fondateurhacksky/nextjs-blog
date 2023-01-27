import Style from '../../styles/persons.module.css';
import { useState } from 'react';
import AppCartM from './AppCartM';


const Home = () => {
    const [data, setData] = useState([]); 

    return(
        <div className={Style.main}>
            <div className={Style.divBar}></div>
            <AppCartM data={data} updateData={setData} Data={data}/>
        </div>
    )
}

export default Home