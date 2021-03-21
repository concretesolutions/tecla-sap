import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import PostContainer from '../components/PostContainer'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Head>
          <title>Tecla SAP</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </header>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image
            src="/logo_high.png"
            className={styles.logo}
            alt="Logotipo do projeto"
            width={400}
            height={262}
          />
          <h1 className={styles.title}>Tecla SAP</h1>

          <p className={styles.description}>
            Artigos em inglês traduzidos para pt-BR.
          </p>

          <PostContainer />
        </main>
        <footer className={styles.footer}>Tecla SAP - 2021</footer>
      </div>
    </>
  )
}
