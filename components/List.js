import Style from '../styles/List.module.css';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPerson, faHouseChimney,faAddressCard, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function List(){

    return(
        <ul className={Style.ul}>
            <li>
                <Link href="/">
                    <FontAwesomeIcon icon={faHouse} className={Style.home}/>
                    Home
                </Link>
            </li>
            <li>
                <Link href='/people/person'>
                    <FontAwesomeIcon icon={faPerson} className={Style.person}/>
                    Personne
                </Link>
            </li>
            <li>
                <Link href="/house/house">
                    <FontAwesomeIcon icon={faHouseChimney} className={Style.home}/>
                    Mobilier
                </Link>
            </li>
            <li>
                <Link href="#">
                    <FontAwesomeIcon icon={faRightToBracket} className={Style.sign}/>
                    S'inscrire
                </Link>
            </li>
            <li>
                <Link href='/about/about'>
                    <FontAwesomeIcon icon={faAddressCard} className={Style.phone}/>
                    About us
                </Link>
            </li>
        </ul>
    )
}