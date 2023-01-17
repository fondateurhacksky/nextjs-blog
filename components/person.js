import Style from '../styles/persons.module.css';
import FormH from './Formh';
import Card from './Card'



const Persons = () => {
    return(
        <div className={Style.container}>
            <div className={Style.divBar}></div>
            <FormH />
            <div className={Style.main}>
                <Card/>
            </div>
        </div>
    )
}

export default Persons