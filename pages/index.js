import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

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

          <div className={styles.grid}>
            <Link href="/posts/17-dicas-otimizacao-javascript">
              <a
                className={styles.card}
                title="17 dicas de otimização de Javascript para conhecer em 2021"
              >
                17 dicas de otimização de Javascript para conhecer em 2021
              </a>
            </Link>
            <Link href="/posts/lazy-loading-nativo-de-imagens-sem-javascript">
              <a
                className={styles.card}
                title="Lazy-loading nativo de imagens sem Javascript"
              >
                Lazy-loading nativo de imagens (sem Javascript)
              </a>
            </Link>
            <Link href="/posts/compreendendo-o-conceito-de-memoization-em-3-minutos">
              <a
                className={styles.card}
                title="Compreendendo o conceito de Memoization (ou memoização) em 3 minutos"
              >
                Compreendendo o conceito de Memoization (ou memoização) em 3
                minutos
              </a>
            </Link>
          </div>
        </main>
        <footer className={styles.footer}>Tecla SAP - 2021</footer>
      </div>
    </>
  )
}
