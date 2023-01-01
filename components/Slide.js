import Image from 'next/image';
import profilePic from '../public/images/a.jpg';
import profilePicb from '../public/images/b.jpg';
import profilePicc from '../public/images/c.jpg';
import profilePicd from '../public/images/d.jpg';
import Style from '../styles/SlideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Navigation(props){
    return(
        <div className={Style.navigation}>
            <FontAwesomeIcon icon={faChevronLeft}  onClick={props.handleClickLeft} className={Style.left}/>
            <FontAwesomeIcon icon={faChevronRight}  onClick={props.handleClickRight} className={Style.right}/>
        </div>
    )
}

function NavigationV(){
    return(
        <div className={Style.navigationVisibility}>
            <div className={`${Style.slideIcon} ${Style.active}`}></div>
            <div className={`${Style.slideIcon}`}></div>
            <div className={`${Style.slideIcon}`}></div>
            <div className={`${Style.slideIcon}`}></div>
        </div>
    )
}


export default function Slide(props){

        return(
            <div className={Style.slider}>
                <div className={`${Style.slide} ${Style.active}`}>
                    <Image src={profilePic}  alt="image de silde bar" priority={true}/>
                    <div className={Style.info}>
                        <p>Parce-que chaque etre humain est un etre divain nous devon le traiter avec respect</p>
                    </div>
                </div>
                <div className={Style.slide}>
                    <Image src={profilePicb}  alt="image de silde bar"/>
                    <div className={Style.info}>
                        <p>Pas besion de crie pour ce faire attendre juste comprendre l\'autre </p>
                    </div>
                </div>
                <div className={Style.slide}>
                    <Image src={profilePicc}  alt="image de silde bar"/>
                    <div className={Style.info}>
                        <p>Je suis comme toi meme si je travaille pour toi </p>
                    </div>
                </div>
                <div className={Style.slide}>
                    <Image src={profilePicd}  alt="image de silde bar"/>
                    <div className={Style.info}>
                        <p>La bonne personne construire toujours de bonne personne l'homme n'est pas mauvais de nature</p>
                    </div>
                </div>
                <Navigation handleClickLeft={props.handleClickLeft} handleClickRight={props.handleClickRight}/>
                <NavigationV/>
        </div>
        )
}