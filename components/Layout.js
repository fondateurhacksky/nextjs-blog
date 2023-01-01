import Head from 'next/head';
import Style from '../styles/Layout.module.css';

export default function Layout({ children }){
    return(
        <div className={Style.container}>
            <Head>
                <title>HAKSKY</title>
                <meta charSet='utf8'/>
                <meta name="viewport" content="width=device-width initial-scale=1"/>
                <link rel='icon' href='https://e7.pngegg.com/pngimages/907/970/png-clipart-white-house-logo-computer-icons-home-house-home-blue-angle.png'/> 
            </Head>
            {children}
        </div>
    )
}