import Style from '../styles/Stylefooter.module.css';
import Image from 'next/image';

export default function Footer(){
    return(
        <footer className={Style.footer}>
            <div className={Style.poster}>
                <Image src="/images/m.webp" alt="maison" width={398} height={298}/>
            </div>

            <div className={Style.page}>
               <div className={Style.divText1}>
               <Image src="/images/s.jpg" alt="maison" width={50} height={50}/>
                    Parce-que nous somme conscient qu'il y'a pas d'algorithme pour verifier la bonne fois de l'etre humain
                    Nous nous chargons de verifier l'identiter de personne que vous envoyer
               </div>
               <div className={Style.divText2}>
               <Image src="/images/sui.png" alt="maison" width={50} height={50}/>
                    Nous suivons l'employer sur une periode de trois moi et prenant en conte vous plainte et remarque
                    en somme nous vous portons assistance et garentissant de la personne dans l'imediat
                    en cas de mecontantement justifier
               </div>
               <div className={Style.divText3}>
               <Image src="/images/trav.png" alt="maison" width={50} height={50}/>
                    Nous vous garentissant a 80% des personne serieuse travalleur pour la gestion de vos tache 
                    et vous garentisant de trouver la bonne maison pour vous !
               </div>
            </div>
        </footer>
    )
}