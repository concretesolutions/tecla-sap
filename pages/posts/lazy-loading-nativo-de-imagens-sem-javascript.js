import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function TipsJavascriptOptimization() {
  return (
    <>
      <header className={styles.header}>
        <Head>
          <title>Lazy-loading nativo de imagens (sem Javascript)</title>
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
              Lazy-loading nativo de imagens (sem Javascript)
            </h1>
            <p className={styles.author}>Autor: Paul Facklam || <a className={styles.link} href="https://dev.to/pfacklam/native-lazy-loading-of-images-with-zero-javascript-3hnf">
              Versão original</a></p>
            
            <h2>
              Sobre o carregamento lento (lazy-loading) e por que você deve
              usá-lo
            </h2>
            <p>
              A rede mundial evoluiu nas últimas décadas e os sites de hoje
              consistem não apenas em texto e cores, mas também em inúmeros
              conteúdos de mídia, como por exemplo, imagens.
            </p>
            <strong>Mas o que isso tem a ver com lazy-loading?</strong>
            <blockquote>
              O lazy-loading é uma técnica que adia o carregamento de recursos
              não-críticos no momento do carregamento da página. Em vez disso,
              esses recursos não-críticos são carregados no momento em que forem
              necessários. No que diz respeito às imagens, "não crítico" costuma
              ser sinônimo de "fora da tela". fonte: web.dev/lazy-loading
              escrito por Jeremy Wagner e Rachel Andrew
            </blockquote>
            <p>
              Isso significa que, usando o lazy-loading, alcançamos os seguintes
              benefícios em relação à forma tradicional de utilizar a tag HTML:
            </p>
            <ul>
              <li>
                Ganhos de desempenho - com o lazy loading, podemos melhorar a
                velocidade de carregamento reduzindo o número de imagens que
                precisam ser carregadas inicialmente.
              </li>
              <li>
                Redução de custo - Uma imagem carregada por meio do lazy-loading
                pode nunca precisar ser carregada porque o usuário não atingiu a
                posição da imagem na página.
              </li>
            </ul>
          </article>
        </main>
        <footer className={styles.footer}>Tecla SAP - 2021</footer>
      </div>
    </>
  )
}
