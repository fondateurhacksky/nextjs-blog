import Style from '../../styles/Stylefooter.module.css';
import Image from 'next/image';

export default function Footer(){
    return(
        <footer className={Style.footer}>
            <div className={Style.poster}>
                <Image src="/images/tools/m.webp" alt="maison" fill/>
            </div>

            <div className={Style.page}>
               <div className={Style.divText1}>
               <Image src="/images/tools/s.jpg" alt="maison" width={50} height={50}/>
                    Parce-que nous somme conscient qu'il y'a pas d'algorithme pour verifier la bonne fois de l'etre humain
                    Nous nous chargons
               </div>
               <div className={Style.divText2}>
               <Image src="/images/tools/sui.png" alt="maison" width={50} height={50}/>
                    Nous suivons l'employer sur une periode de trois moi et prenant en conte vous plainte et remarque
                    en somme nous vous portons assistance et 
               </div>
               <div className={Style.divText3}>
               <Image src="/images/tools/trav.png" alt="maison" width={50} height={50}/>
                    Nous vous garentissant a 80% des personne serieuse travalleur pour la gestion de vos tache 
                    et vous garentisant de trouver la bonne maison pour vous !
               </div>
            </div>
        </footer>
    )
}