import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Highlight from 'react-highlight'
import 'highlight.js/styles/a11y-dark.css'

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
          <Link href="/">
            <a title="Página principal">
              <Image
                src="/logo_high.png"
                className={styles.logo}
                alt="Logotipo do projeto"
                width={400}
                height={262}
              />
            </a>
          </Link>

          <p>
            <Link href="/">
              <a title="Página principal">Página principal</a>
            </Link>
          </p>
          <article className={styles.article}>
            <h1 className={styles.post}>
              17 dicas de otimização de Javascript para conhecer em 2021
            </h1>
            <p className={styles.author}>
              Autor: Blessing Hirwa ||{' '}
              <a
                className={styles.link}
                href="https://dev.to/blessingartcreator/17-javascript-optimization-tips-3gil"
              >
                Versão original
              </a>
            </p>

            <p>
              Mesmo utilizando Javascript há bastante tempo, às vezes podemos
              não estar atualizados quanto aos novos recursos que ele oferece, e
              que podem resolver problemas sem escrever mais código. Essas
              técnicas podem ajudar a escrever de forma limpa e otimizada, além
              de ajudá-lo a se preparar para entrevistas.
            </p>
            <h2>1. If com várias condições</h2>
            <p>
              Podemos armazenar valores em um array e podemos usar o método{' '}
              <code>includes</code> para fazer a verificação da condição:
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                //formato mais longo
                if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl'){ 
                  //executar
                }
                //formato mais curto
                if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
                  //executar
                }
                `}
              </Highlight>
            </pre>
            <h2>2. If...else abreviado</h2>
            <p>
              Este é um atalho para quando temos condições <code>if-else</code>{' '}
              que não contêm lógicas extensas. Podemos usar os operadores
              ternários para simplificar.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // formato mais longo
                let test= boolean;
                if (x > 100) {
                    test = true;
                } else {
                    test = false;
                }
                
                //formato mais curto
                let test = (x > 10) ? true : false;
                
                //ou podemos encurtar ainda mais:
                let test = x > 10;
                console.log(test);
                `}
              </Highlight>
            </pre>
            <p>É possível também aninhar a condição:</p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                let x = 300,
                let test2 = !(x > 100) ? 'greater 100' : (x < 50) ? 'less 50' : 'between 50 and 100';
                console.log(test2); // "greater than 100"                
                `}
              </Highlight>
            </pre>
            <h2>3.Checagem de null, undefined, e variáveis vazias</h2>
            <p>
              Quando criamos novas variáveis, às vezes queremos verificar se seu
              valor não é <code>null</code> ou <code>undefined</code>.
              JavaScript tem um atalho muito bom para realizar essas funções.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
               // formato mais longo
               if (first !== null || first !== undefined || first !== '') {
                   let second = first;
               }
               // formato mais curto
               let second = first || '';               
                `}
              </Highlight>
            </pre>
            <h2>4.Verificações de valor nulo e atribuição de valor padrão</h2>
            <p>
              Formatos breves para estabelecer um valor designado em caso de{' '}
              <code>null</code>
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
               let first = null,
               let second = first || '';
               console.log("verificação de null",second); // resultado será ''                             
                `}
              </Highlight>
            </pre>
            <h2>
              5.Verificações de valor undefined e atribuição de um valor padrão
            </h2>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
               let first = undefined;
               let second = first || '';
               console.log("verificar undefined check", second); // resultado será ""                                          
                `}
              </Highlight>
            </pre>
            <h2>6. Laço forEach abreviado</h2>
            <p>Este é um atalho útil para iteração:</p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // formato mais longo
                for (var i = 0; i < testData.length; i++)

                // formato mais breve
                for (let i in testData) or  for (let i of testData)                            
                `}
              </Highlight>
            </pre>
            <h2>7. Retornos de comparação</h2>
            <p>
              Usar a comparação na instrução de retorno evitará 5 linhas de
              código e as reduzirá para 1 linha.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // formato mais longo
                let test;
                function checkReturn() {
                    if (!(test === undefined)) {
                        return test;
                    } else {
                        return callMe('test');
                    }
                }
                var data = checkReturn();
                console.log(data); //resulta em test
                
                function callMe(val) {
                    console.log(val);
                }
                
                // formato mais breve
                function checkReturn() {
                    return test || callMe('test');
                }                          
                `}
              </Highlight>
            </pre>
            <h2>8. Chamada de função curta</h2>
            <p>
              Podemos alcançar esses tipos de funções usando o operador
              ternário.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // formato mais longo
                function test1() {
                  console.log('test1');
                };
                function test2() {
                  console.log('test2');
                };
                var test3 = 1;
                if (test3 == 1) {
                  test1();
                } else {
                  test2();
                }
                
                // formato mais breve
                (test3 === 1? test1:test2)();                                          
                `}
              </Highlight>
            </pre>
            <h2>9. Forma breve de usar Switch</h2>
            <p>
              Podemos salvar as condições nos objetos de valor-chave e podem ser
              usados com base nas condições.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // formato mais longo
                switch (dado) {
                  case 1:
                    test1();
                  break;
                
                  case 2:
                    test2();
                  break;
                
                  case 3:
                    test();
                  break;
                  // E assim em diante...
                }
                
                //  formato mais breve
                var dado = {
                  1: test1,
                  2: test2,
                  3: test
                };
                
                dado[condicao] && dado[condicao]();                                                         
                `}
              </Highlight>
            </pre>
            <h2>10. Abreviação de string multi-linha</h2>
            <p>
              Quando estamos lidando com uma string de várias linhas no código,
              podemos fazer isso da seguinte maneira:
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                //formato mais longo

                const data = 'abc abc abc abc abc abc\n\t'
                    + 'test test,test test test test\n\t'
                
                //formato mais breve
                
                const data = \`abc abc abc abc abc abc
                         test test,test test test test\`
                                                         
                `}
              </Highlight>
            </pre>
            <h2>11. Formato breve de retorno implícito</h2>
            <p>
              Com o uso das <code>arrow functions</code>, podemos retornar o
              valor diretamente, sem precisar escrever uma instrução de retorno.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // formato mais longo
                function getArea(diameter) {
                  return Math.PI * diameter
                }
                
                // formato mais breve
                getArea = diameter => (
                  Math.PI * diameter;
                )
                
                // formato em uma linha
                getArea = diameter => Math.PI * diameter;
                `}
              </Highlight>
            </pre>
            <h2>12. Formato breve para condicional de busca</h2>
            <p>
              Se tivermos que verificar o tipo e, com base no tipo, precisamos
              chamar métodos diferentes, temos a opção de usar vários{' '}
              <code>else if</code> ou usar o <code>switch</code>. Mas há uma
              forma abreviada que também pode ser utilizada.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // formato mais longo
                if (type === 'test1') {
                  test1();
                }
                else if (type === 'test2') {
                  test2();
                }
                else if (type === 'test3') {
                  test3();
                }
                else if (type === 'test4') {
                  test4();
                } else {
                  throw new Error('Invalid value ' + type);
                }
                
                // formato mais breve
                var types = {
                  test1: test1,
                  test2: test2,
                  test3: test3,
                  test4: test4
                };
                
                var condicao = types[type];
                (!condicao) && throw new Error('Invalid value ' + type); condicao();                
                `}
              </Highlight>
            </pre>
            <h2>13. Object.entries()</h2>
            <p>
              Esse recurso ajuda a converter o objeto em um array de objetos.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                const data = { test1: 'abc', test2: 'cde', test3: 'efg' };
                const arr = Object.entries(data);
                console.log(arr);
                /** Resultado:
                [ [ 'test1', 'abc' ],
                  [ 'test2', 'cde' ],
                  [ 'test3', 'efg' ]
                ]
                **/                
                `}
              </Highlight>
            </pre>
            <h2>14. Object.values ()</h2>
            <p>
              Este também é um novo recurso introduzido no ES8 que executa uma
              função semelhante a Object.entries (), mas sem a parte das chaves,
              retornando apenas o valor:
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                const data = { test1: 'abc', test2: 'cde' };
                const arr = Object.values(data);
                console.log(arr);
                // Resultado:
                // [ 'abc', 'cde']                              
                `}
              </Highlight>
            </pre>
            <h2>15. Repita uma string várias vezes</h2>
            <p>
              Para repetir os mesmos caracteres várias vezes, podemos usar o
              laço for e adicioná-los ao mesmo laço, mas há um atalho para isso:
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // formato mais longo 
                let test = ''; 
                for(let i = 0; i < 5; i ++) { 
                  test += 'test '; 
                } 
                console.log(test); // test test test test test 
                
                // formato mais breve
                'test '.repeat(5);                                            
                `}
              </Highlight>
            </pre>
            <h2>16. Abreviação para potência</h2>
            <p>Abreviação para escrever uma função de potência exponencial:</p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                //formato mais longo
                Math.pow(2,3); // 8
                
                //formato mais breve
                2**3 // 8                                                           
                `}
              </Highlight>
            </pre>
            <h2>17. Separadores numéricos</h2>
            <p>
              Agora você pode separar facilmente os números com apenas um _.
              Isso facilitará a vida dos desenvolvedores que trabalham com
              grandes números.
            </p>
            <pre className={styles.pre}>
              <Highlight language="javascript">
                {`
                // sintaxe antiga
                let number = 98234567
                
                // nova sintaxe
                let number = 98_234_567                                                                          
                `}
              </Highlight>
            </pre>
            <h2>
              Para se atualizar com os recursos mais recentes da mais nova
              versão do JavaScript (ES2021 / ES12):
            </h2>
            <ol>
              <li>
                <b>replaceAll ()</b>: retorna uma nova string com todos os
                resultados de um padrão substituídos pelo novo padrão.
              </li>
              <li>
                <b>Promise.any ()</b>: Percorre um iterável de objetos Promise
                e, conforme uma promessa é respondida com sucesso, retorna
                apenas essa única promessa com o valor.
              </li>
              <li>
                <b>weakref</b>: Este objeto contém uma referência fraca para
                outro objeto sem impedir que esse objeto seja coletado como
                lixo.
              </li>
              <li>
                <b>FinalizationRegistry</b>: Permite solicitar um retorno de
                chamada quando um objeto é coletado como lixo.
              </li>
              <li>
                <b>Visibilidade privada</b>: modificador para métodos e
                accessors. Métodos privados podem ser declarados com #.
              </li>
              <li>
                <b>Operadores lógicos</b>: && e ||
              </li>
              <li>
                <b>Intl.ListFormat</b>: Este objeto permite a formatação de
                listas sensíveis ao idioma.
              </li>
              <li>
                <b>Intl.DateTimeFormat</b>: Este objeto permite a formatação de
                data e hora sensível ao idioma.
              </li>
            </ol>
          </article>
        </main>
        <footer className={styles.footer}>Tecla SAP - 2021</footer>
      </div>
    </>
  )
}
