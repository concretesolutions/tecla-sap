import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Highlight from 'react-highlight'
import 'highlight.js/styles/a11y-dark.css'

export default function NativeLazyLoading() {
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
            <p className={styles.author}>
              Autor: Paul Facklam ||{' '}
              <a
                className={styles.link}
                href="https://dev.to/pfacklam/native-lazy-loading-of-images-with-zero-javascript-3hnf"
              >
                Versão original
              </a>
            </p>

            <h2>
              Sobre o carregamento lento (lazy-loading) e por que você deve
              usá-lo
            </h2>
            <p>
              A rede mundial evoluiu nas últimas décadas e os sites de hoje
              consistem não apenas em texto e cores, mas também em inúmeros
              conteúdos de mídia, como por exemplo, imagens.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                <img src="/path/to/your/image.jpg &quot; alt="Awesome image &quot; />
                `}
              </Highlight>
            </pre>
            <strong>Mas o que isso tem a ver com lazy-loading?</strong>
            <blockquote>
              O lazy-loading é uma técnica que adia o carregamento de recursos
              não-críticos no momento do carregamento da página. Em vez disso,
              esses recursos não-críticos são carregados no momento em que forem
              necessários. No que diz respeito às imagens, &quot;não crítico&quot; costuma
              ser sinônimo de &quot;fora da tela&quot;. fonte: web.dev/lazy-loading
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
            <p>
              OK, soa vantajoso. Como podemos fazer isso acontecer? O que
              precisamos para isso? Vamos começar!
            </p>
            <h2>A abordagem antiga (com Javascript)</h2>
            <p>
              Existem muitos snippets e scripts como{' '}
              <code>vanilla-lazyload</code> por aí que permitem o carregamento
              lento via JavaScript. Em quase todos os casos, um atributo{' '}
              <code>data</code> é usado para evitar o carregamento inicial da
              imagem.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                <img data-src="/path/to/your/image.jpg &quot; alt="Awesome image &quot; />
                `}
              </Highlight>
            </pre>
            <p>
              Mas como a imagem é carregada? Para conseguir isso, uma das duas
              técnicas a seguir é geralmente usada.
            </p>
            <h3>Event Listeners</h3>
            <p>
              Essa técnica usa event listeners nos eventos de{' '}
              <code>scroll</code>, <code>resize</code> e{' '}
              <code>orientationChange</code> no navegador. Se um dos eventos
              mencionados for disparado e assumindo que a imagem entre em
              visualização (viewport), o atributo <code>data-src</code> é
              substituído pelo atributo <code>src</code> para acionar a chamada
              de carregamento. Veja em ação neste{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/imagekit_io/pen/MBNwKB"
              >
                codepen
              </a>
              .
            </p>
            <h3>IntersectionObserver API</h3>
            <p>
              Ao contrário do primeiro método, a imagem é observada (de forma
              assíncrona) usando a API IntersectionObserver. A imagem é
              carregada alterando o atributo data-src para src assim que entrar
              em visualização (viewport).{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/imagekit_io/pen/BPXQZZ"
              >
                Veja um codepen com o exemplo.
              </a>
            </p>
            <p>
              Mas e se eu disser que você não precisa de Javascript? Sim, você
              ouviu direito! Zero Javascript.
            </p>
            <h2>A nova abordagem (HTML)</h2>
            <p>
              Então, como é essa nova forma de <code>lazy-loading?</code> Não se
              preocupe, é bastante simples. Você apenas tem que adicionar{' '}
              <code>"loading = &quot;lazy"</code> à sua tag de imagem e pronto.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                <img src="/path/to/your/image.jpg &quot; loading="lazy &quot; />
                `}
              </Highlight>
            </pre>
            <p>
              Com este novo atributo de carregamento, você pode adiar
              completamente o carregamento de imagens fora da tela (e até mesmo
              iframes em alguns navegadores) para quando eles entrarem em
              visualização (viewport). Chega de conversa, vamos ver em ação!{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/pfacklam/pen/eYBmeyx"
              >
                Veja um codepen com o exemplo.
              </a>
            </p>
            <p>O atributo vem com três valores:</p>
            <ul>
              <li>
                <code>auto</code> - (modo default) igual a não incluir o
                atributo.
              </li>
              <li>
                <code>lazy</code> - (Adia o carregamento de recursos até que ele
                entre no viewport.
              </li>
              <li>
                <code>eager</code> - Carrega o recurso imediatamente.
              </li>
            </ul>
            <h3>E quanto ao suporte do navegador?</h3>
            <p>
              O atributo é compatível com quase todos os navegadores populares
              (Chrome, Edge, Opera e Firefox). A implementação do Safari está em
              andamento e quase concluída. Se você precisar de informações mais
              detalhadas sobre o suporte para vários navegadores, pode verificar
              em <b>caniuse.com</b>.
            </p>
            <h3>O que acontece se um navegador não suportar o atributo?</h3>
            <p>
              Os navegadores que não oferecem suporte ao atributo de
              carregamento simplesmente o ignoram sem quaisquer efeitos
              colaterais. Felizmente, existe um polyfill disponível no Github
              chamado <code>loading-attribute-polyfill</code> que pode ser
              utilizado nesses casos.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                if ('loading' in HTMLImageElement.prototype) {
                  // Legal! O browser suporta o atributo
              } else {
                 // Houston...precisamos de um polyfill!
              }              
                `}
              </Highlight>
            </pre>
            <h3>Existem limitações?</h3>
            <p>
              Embora seja muito legal deixar o navegador fazer o trabalho de
              lazy-loading, você deve estar ciente de algumas limitações que
              surgem ao usar o atributo:
            </p>
            <ul>
              <li>
                Ao contrário das soluções com Javascript, você não tem nenhuma
                influência no limite para carregar o recurso. Isso faz parte do
                código do navegador e não pode ser alterado por enquanto.
              </li>
              <li>
                O atributo não pode ser usado em combinação com imagens de fundo
                CSS. Talvez isso esteja disponível em um futuro próximo, mas não
                agora.
              </li>
              <li>
                Se imprimir a página da web é um caso de uso real para você,
                observe que há um bug aberto para o atributo de carregamento.{' '}
              </li>
            </ul>
          </article>
        </main>
        <footer className={styles.footer}>Tecla SAP - 2021</footer>
      </div>
    </>
  )
}
