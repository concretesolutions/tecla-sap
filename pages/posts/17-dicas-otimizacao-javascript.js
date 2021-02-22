import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function TipsJavascriptOptimization() {
  return (
    <>
      <header className={styles.header}>
        <Head>
          <title>17 dicas de otimização de JS para conhecer em 2021</title>
        </Head>
      </header>
      <div className={styles.container}>
        <main className={styles.posts}>
          <Image
            src="/logo_high.png"
            className={styles.logo}
            alt="Logotipo do projeto"
            width={400}
            height={262}
          />

          <p>
            <Link href="/">
              <a title="Página principal">Página principal</a>
            </Link>
          </p>
          <article className={styles.article}>
            <h1 className={styles.post}>
              17 dicas de otimização de Javascript para conhecer em 2021
            </h1>
            <p className={styles.author}>Autor: Blessing Hirwa || <a className={styles.link} href="https://dev.to/blessingartcreator/17-javascript-optimization-tips-3gil">
              Versão original
            </a></p>
            
            <p>
              Mesmo utilizando Javascript há bastante tempo, às vezes podemos
              não estar atualizados quanto aos novos recursos que ele oferece, e
              que podem resolver problemas sem escrever mais código. Essas
              técnicas podem ajudar a escrever de forma limpa e otimizada, além
              de ajudá-lo a se preparar para entrevistas.
            </p>
            <h2>1. If com várias condições</h2>
            <p>
              Podemos armazenar valores em um array e podemos usar o método
              includes para fazer a verificação da condição:
            </p>
            <pre className={styles.pre}>
              <code>
                //formato mais longo
                <br />
                if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl'){' '}
                {<br />}
                <br />
                <br />
                //formato mais curto
                <br />
                if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {<br />}
                <br />
              </code>
            </pre>
          </article>
        </main>
        <footer className={styles.footer}>Tecla SAP - 2021</footer>
      </div>
    </>
  )
}
