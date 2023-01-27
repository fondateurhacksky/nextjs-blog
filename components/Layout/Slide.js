import Image from 'next/image';
import profilePic from '../../public/images/tools/a.jpg';
import profilePicb from '../../public/images/tools/b.jpg';
import profilePicc from '../../public/images/tools/c.jpg';
import profilePicd from '../../public/images/tools/d.jpg';
import Style from '../../styles/SlideBar.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


function Navigation(props){
    return(
        <div className={Style.navigation}>
            <BsChevronLeft  onClick={props.handleClickLeft} className={Style.left}/>
            <BsChevronRight  onClick={props.handleClickRight} className={Style.right}/>
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
                    <Image src={profilePicb}  alt="image de silde bar" priority={true}/>
                    <div className={Style.info}>
                        <p>Pas besion de crie pour ce faire attendre juste comprendre l\'autre </p>
                    </div>
                </div>
                <div className={Style.slide}>
                    <Image src={profilePicc}  alt="image de silde bar" priority={true}/>
                    <div className={Style.info}>
                        <p>Je suis comme toi meme si je travaille pour toi </p>
                    </div>
                </div>
                <div className={Style.slide}>
                    <Image src={profilePicd}  alt="image de silde bar" priority={true}/>
                    <div className={Style.info}>
                        <p>La bonne personne construire toujours de bonne personne l'homme n'est pas mauvais de nature</p>
                    </div>
                </div>
                <Navigation handleClickLeft={props.handleClickLeft} handleClickRight={props.handleClickRight}/>
                <NavigationV/>
        </div>
        )
}