import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Highlight from 'react-highlight'
import 'highlight.js/styles/a11y-dark.css'

export default function MemoizationIn3Mins() {
  return (
    <div>
      <header className={styles.header}>
        <Head>
          <title>
            Compreendendo o conceito de Memoization (ou memoização) em 3 minutos
          </title>
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
              Compreendendo o conceito de Memoization (ou memoização) em 3
              minutos
            </h1>
            <p className={styles.author}>
              Autor: Codesmith ||{' '}
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href="https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19"
              >
                Versão original
              </a>
            </p>
            <p>
              Existem vários artigos excelentes que falam sobre a técnica de
              otimização chamada memoization (memoização). Você pode acessá-los
              aqui{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://inlehmansterms.net/2015/03/01/javascript-memoization/"
              >
                aqui
              </a>{' '}
              e{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.sitepoint.com/implementing-memoization-in-javascript/"
              >
                {' '}
                aqui
              </a>{' '}
              (OBS: artigos em inglês). O que vamos fazer neste artigo é uma
              breve visão geral do conceito, fazendo uma análise passo a passo
              do que o código de memoização está fazendo, linha por linha.
            </p>

            <h2>Memoização em poucas palavras</h2>

            <p>
              Memoização é a prática programática de fazer funções
              recursivas/iterativas longas serem executadas com muito mais
              rapidez. Como isso acontece? Armazenando em cache os valores que a
              função retorna após sua execução inicial.
            </p>
            <p>
              Quando inserimos o mesmo valor em nossa função memo, ela retorna o
              valor armazenado no cache em vez de executar a função novamente,
              aumentando assim o desempenho. Seu programa não precisa mais
              recalcular todos os números para obter um resultado. Parece
              incrível, certo? Bem, o que é ainda melhor é que não é difícil
              entender o que uma função memoizada está fazendo depois de
              analisar o código. Aqui está um exemplo de função memo básica:
            </p>

            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                  var cache = {};
                  return function(){
                    var key = JSON.stringify(arguments);
                    if (cache[key]){
                      console.log(cache)
                      return cache[key];
                    }
                    else{
                      val = func.apply(null, arguments);
                      cache[key] = val;
                      return val; 
                    }
                }
              }
              
                `}
              </Highlight>
            </pre>
            <h2>Vamos começar do começo…</h2>
            <p>
              Estamos retornando o que é chamado de <i>anonymous closure</i> (um
              closure anônimo). Nosso closure anônimo é capaz de herdar qualquer
              variável ou, neste caso, função passada para <code>memo</code>.
              Podemos então manipular o objeto de argumentos que nossa função
              passada fornece.
            </p>
            <p>
              <strong>Observação: </strong>então, se cada função tem um objeto
              de argumentos, por que não herdamos o objeto de argumentos da
              função <code>memo</code>? Isso ocorre porque, como via de regra,
              closures não herdam o objeto de argumentos de uma função externa.
              Usamos essa regra a nosso favor para manipular a função que
              queremos memoizar.
            </p>
            <p>
              Vamos analisar exatamente o que a memoização está fazendo,
              observando um exemplo muito simples e pouco prático. A propósito,
              você deve copiar / colar este código, ou qualquer código para esse
              assunto, para realmente ter uma ideia de como funciona.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                / *
                Closures não podem acessar o objeto de argumentos do pai, mas, 
                como as funções são objetos de primeira classe, podemos passar 
                uma função como parâmetro.
                O closure agora pode acessar o objeto de argumentos da função 
                que é passada como um parâmetro.
                Portanto, não há confusão sobre quais objetos de argumentos 
                queremos que o closure acesse. Basicamente, estamos aproveitando
                suas limitações.
                * /
                
                function demoMemo(func){
                // devemos retornar uma função para manter o state (estado)
                // isso ficará mais aparente em um exemplo recursivo
                
                  return function () {
                    console.log(func); // >   function (num){num + num}
                    console.log(arguments[0]); // > 1
                  }
                }
                
                // Nossa function expression aqui invoca demoMemo e passa uma 
                função anônima.
                
                var adder = demoMemo(function(num){
                 num + num;
                }) 
                
                // Depois que isso é passado, quando chamamos nossa expressão de 
                // função, temos acesso a todas as propriedades da função que 
                // queremos memoizar.
                
                adder(1);
                
                `}
              </Highlight>
            </pre>
            <p>
              Vamos aprofundar um pouco mais olhando para um retrato de uma
              função memo real:
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                //Sabendo que temos acesso aos inputs do usuário em nossa function
                //expression, podemos escrever...
                  
                return function(){     
                     var key = JSON.stringify(arguments);
                     if (cash[key]){
                      return cache[key];
                     }
                    
                    else{
                      //apply() é bastante útil aqui e vai 
                      //retornar o valor da função que está chamando
                      val = func.apply(this, arguments);
                      //então definimos o valor da função para o key(argument).
                      //Da próxima vez que a função for executada
                      //se o argumento for o mesmo, nós retornamos
                      //o valor sem precisar que a função seja executada.
                
                      cash[key] = val;
                      return val;
                    }
                }
                
                `}
              </Highlight>
            </pre>
            <p>
              Agora que dividimos o que uma função memo está fazendo, vamos
              criar uma <i>function expression</i> e passar uma função Fibonacci
              recursiva para memo e ver o que acontece.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                var fib = memo(function(n) {
                  if (n < 2){
                    return 1;
                  }else{
                   //Vamos olhar via console.log um carregamento cada vez que
                   //tivermos um recurse
                    console.log("carregando...");
                    return fib(n-2) + fib(n-1);
                  }
               });
               
               
               
               // Agora vamos testar nosso código!
               // ======= TESTE =======
               fib (10)
               // Na primeira tentativa, precisamos carregar
               // => carregando…
               // => carregando…
               // => carregando…
               // => carregando…
               // => carregando…
               // => 4 carregamentos depois nós temos ...
               // => 89
               // E na segunda tentativa ...
               fib (10)
               // => 89
               // Sem carregamento! Yaay!
               // O legal de memoizar o algoritmo de Fibonacci recursivo é que, 
               // assim que fizermos uma chamada para o valor do enésimo número 
               // na série, poderemos armazenar todos os números anteriores da série.
               // Então, se tentarmos ...
               fib (7) // => 21
               // Não precisamos recalcular nada.
               // E se quisermos tentar fib (11) ...
               fib (11)
               //carregando...
               // => 144
               // Nossa função recursiva memoizada já armazenava fib (1-10) em cache, 
               //então tudo o que precisava fazer era calcular os valores armazenados 
               //em cache.
               // O cache está assim agora:
               / *
               {‘{“ 0 ”: 0}’: 1,
               ‘{“ 0 ”: 1}’: 1,
               ‘{“ 0 ”: 2}’: 2,
               ‘{“ 0 ”: 3}’: 3,
               ‘{“ 0 ”: 4}’: 5,
               ‘{“ 0 ”: 5}’: 8,
               ‘{“ 0 ”: 6}’: 13,
               ‘{“ 0 ”: 7}’: 21,
               ‘{“ 0 ”: 8}’: 34,
               ‘{“ 0 ”: 9}’: 55,
               ‘{“ 0 ”: 10}’: 89,
               ‘{“ 0 ”: 11}’: 144}
               * /
               
                `}
              </Highlight>
            </pre>
            <h3>Conclusão</h3>
            <p>
              A memoização é desmistificada quando é reduzida a pares de
              valores-chave. Tudo o que estamos fazendo é criando um objeto,
              verificando os valores existentes que correspondem à entrada do
              usuário e armazenando novos pares de valores-chave, se eles não
              existirem ainda em nosso objeto. Claro, armazenar todos esses
              dados significa que vamos usar toda a memória.{' '}
              <strong>
                É melhor implementar a memoização em funções que são puras e
                envolvem cálculos pesados e repetitivos
              </strong>
              .
            </p>
          </article>
        </main>
        <footer className={styles.footer}>Tecla SAP - 2021</footer>
      </div>
    </div>
  )
}
