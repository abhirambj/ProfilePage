import Head from 'next/head'
import Card from '../components/Card'
import ContactCard from '../components/ContactCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <Card/>
       <ContactCard/>
      </main>
    </div>
  )
}
