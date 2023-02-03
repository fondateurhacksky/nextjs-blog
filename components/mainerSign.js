import Link from "next/link";
import Button from '@mui/material/Button';
import styles from '../styles/Mainer.module.css'

function Mainer() {
  return (
    <div className={styles.main}>
      <Link href="/sign/work">
          <Button variant="contained" size="large">Trouver du  Travaille</Button>
      </Link>

      <Link href="/sign/house">
          <Button variant="contained" size="large">INTERSER PAR LE MOBILIER</Button>
      </Link>
    </div>
  );
}

export default Mainer;
