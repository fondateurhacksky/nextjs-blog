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
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"/> 
            </Head>
            <body className={Style.body}>
                {children}
            </body>
        </div>
    )
}