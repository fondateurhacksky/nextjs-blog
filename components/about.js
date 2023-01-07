import React from 'react';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>A propos de nous</h2>
      <p className={styles.paragraph}>
        Notre entreprise est spécialisée dans le placement de personnes dans des logements temporaires ou à long terme. Nous sommes passionnés par ce que nous faisons et nous nous efforçons de fournir à nos clients une expérience de location sans stress.
      </p>
      <p className={styles.paragraph}>
        Nous comprenons que trouver un nouveau logement peut être stressant, surtout si vous êtes à la recherche d'un endroit où vous pouvez vous sentir chez vous. C'est pourquoi nous mettons tout en œuvre pour vous aider à trouver le logement idéal qui répond à vos besoins et à votre budget.
      </p>
      <p className={styles.paragraph}>
        Outre le placement de personnes, nous offrons également un service de mobilier pour ceux qui ont besoin de meubler leur nouveau logement. Nous sommes là pour vous aider à trouver les meubles parfaits pour votre nouvel espace de vie.
      </p>
      <p className={styles.paragraph}>
        Enfin, la sécurité est notre priorité absolue. Nous vérifions l'identité de chaque personne avec qui nous mettons en contact nos clients afin de garantir que vous serez en sécurité dans votre nouveau logement.
      </p>
      <p className={styles.paragraph}>
        Nous espérons avoir l'opportunité de vous aider à trouver votre prochain chez-vous et de rendre votre expérience de location aussi agréable que possible.
      </p>
    </div>
  );
};

export default About;
