import styles from '../styles/popup.module.css'
import Image from 'next/image';
import Link from 'next/link'

const Popup = () =>{
    return(
            <div className={styles.popup}>
                <Image src="/images/tools/tick.png" width={100} height={100} alt="valide"/>
                <h2>Thank You !</h2>
                <p>Your details has been send successfully</p>
                <Link href="/">
                <button type="button">OK</button>
                </Link>
            </div>
    )
}

export default Popup