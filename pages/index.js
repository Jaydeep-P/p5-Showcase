import Head from 'next/head'
import styles from '../styles/Home.module.css'
import sketchData from '../public/sketchData.json'
import Link from 'next/link'


export async function getStaticProps(context) {
  //request db for this data
  //here we use static json for gh-pages
  const data = sketchData;
  return {
    props: {data} // will be passed to the page component as props
  }
}

 function SkBox({sk}){

  return(
    <Link href={(process.env.ghpages?process.env.ghpath:"")+`/sketch/${sk.sketchName}`} passHref>
    <div className={styles.skboxWrapper}>
        <div className={styles.skboxBackImage} style = {{backgroundImage:`url("${(process.env.ghpages?process.env.ghpath:"")+sk.backImageURL}")`}} />
        <div className={styles.skboxText}>{sk.sketchName.charAt(0).toUpperCase()+ sk.sketchName.substring(1)}</div>
      </div>
    </Link>
  )
}


export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="A showcase for your p5js sketches." />
        <link rel="icon" href={(process.env.ghpages?process.env.ghpath:"")+"/favicon.ico"} />
        
      </Head>

      <main className={styles.main}>
        <div className={styles.gridContainer}>
          {
            data.map(sk=>{
              return (
                <SkBox key={sk.sketchName} sk={sk}/>
              )
            })
          }
        </div>
      </main>

    </div>
  )
}
