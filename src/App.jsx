//aqui dentro do app, o app ja 'e um componente, o componente 'e uma parte a nossa aplicacao que pode ser repetida viversas vezes
//
//todo arquivo que tem a extencao JSX, que JSX nada mais 'e do que JavaScript + XML (HTML).
//
//entao o componente nada mais 'e do que uma funcao que retorna algum HTML
//
//em react temos sempre que lembrar que o componente pode ser repetido varias vezes, porem precisamos colocar um elemento em 
//volta (ex: <div><pos /></div>)
//
//exite varias formas de import e export, no export default a vantagem 'e vc dar o nome que quiser na importacao, porem caso utilize isso
//em caso de vc copiar e colar um component para facilitar e nao auterar o nome no export ai vc vai acabar tendo um erro. Ja vc utilizando o 
//name export, vc usa o export direto na function e assim evita o erro caso vc esquecer de alterar o nome do component).
//entao este projeto sera feito todo em name export. Nao esquecer de na hora do import colocar o nome do componente dentro de {}
//
//Sengundo conceito importante para aprender 'e propriedades, que nada mais sao do que informacoes que podemos passar para os componentes, no 
//react quando passamos um atributo dentro de um componente da-se o nome de propriedade, ex: <Post author="Diego Fernandes" />
//como criei o text que esta content abaixo (escrever lorem e no vs code ira aparecer esse texto test)
//quando passamos uma propriedade no componente podemos acessar elas depois como paramentros de uma funcao
import { Post } from './Post';

export function App() {
  return (
      <div>
        <Post 
          author="Diego Fernandes" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quibusdam voluptate libero quam ut magni, possimus repudiandae animi quaerat nam eveniet qui, molestias cupiditate aliquam necessitatibus aspernatur quo et porro!"
        />
        <Post
          author="Gabriel Buzzi"
          content="um novo post muito legal"
        />
      </div>
  )
}


