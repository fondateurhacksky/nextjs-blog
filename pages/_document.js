import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
      <title>HAKSKY</title>
      <meta charSet='utf8'/>
        <meta name="viewport" content="width=device-width initial-scale=1"/>
        <link rel='icon' href='https://e7.pngegg.com/pngimages/907/970/png-clipart-white-house-logo-computer-icons-home-house-home-blue-angle.png'/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
