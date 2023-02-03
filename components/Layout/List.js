import Style from '../../styles/Nav.module.css';
import Link from 'next/link'
import { AiFillHome} from 'react-icons/ai';
import { GiPerson } from 'react-icons/gi';
import { FaHome, FaSignInAlt,FaAddressCard } from 'react-icons/fa';



export default function List(){

    return(
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body ">
                <ul className={`${Style.ul} navbar-nav`}>
                    <li>
                        <Link className="active" aria-current="page" href="/">
                            <AiFillHome className={Style.home}/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link aria-current="page" href='/people/persons'>
                            <GiPerson className={Style.person}/>
                            Personne
                        </Link>
                    </li>
                    <li>
                        <Link  aria-current="page" href="/house/house">
                            <FaHome className={Style.home}/>
                            Mobilier
                        </Link>
                    </li>
                    <li>
                        <Link  aria-current="page" href="/sign/signMain">
                            <FaSignInAlt className={Style.sign}/>
                            S'inscrire
                        </Link>
                    </li>
                    <li>
                        <Link  aria-current="page" href='/about/about'>
                            <FaAddressCard className={Style.phone}/>
                            About us
                        </Link>
                    </li>
                </ul>
            </div>    
            </div>
        </div>
    )
}