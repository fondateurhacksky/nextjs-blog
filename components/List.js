import Style from '../styles/List.module.css';
import Link from 'next/link'
import { AiFillHome} from 'react-icons/ai';
import { GiPerson } from 'react-icons/gi';
import { FaHome, FaSignInAlt,FaAddressCard } from 'react-icons/fa';



export default function List(){

    return(
        <ul className={Style.ul}>
            <li>
                <Link href="/">
                    <AiFillHome className={Style.home}/>
                    Home
                </Link>
            </li>
            <li>
                <Link href='/people/persons'>
                    <GiPerson className={Style.person}/>
                    Personne
                </Link>
            </li>
            <li>
                <Link href="/house/house">
                    <FaHome className={Style.home}/>
                    Mobilier
                </Link>
            </li>
            <li>
                <Link href="/signup/signup">
                    <FaSignInAlt className={Style.sign}/>
                    S'inscrire
                </Link>
            </li>
            <li>
                <Link href='/about/about'>
                    <FaAddressCard className={Style.phone}/>
                    About us
                </Link>
            </li>
        </ul>
    )
}