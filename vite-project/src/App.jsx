import { Routes, Route} from 'react-router-dom'
import { Home } from './Componentes/Home'
import { Contato } from './Componentes/Contato'
import { Footer } from './Componentes/Footer'
import { Header } from './Componentes/Header'
import { Historia } from './Componentes/Historia'
import { Missao } from './Componentes/Missao'
import { Produto } from './Componentes/Produto'
import './Styles.global.css'

function App() {

  return (
  
    <div>
    <Header />

    <Routes>
    <Route path='/' element={<Home nomePagina='MERCADO SABIÁ'/>} />

    <Route path='/missao' element={<Missao 
    nomePagina='Missão' 
    missao='"Ser o melhor varejista do Brasil na

    mente e no coração dos consumidores e funcionários.'/>} />


    <Route path='/produto' element={<Produto
    nomePagina='Nossos Produtos' 
    produto1='Agua Sanitaria  - R$12,99' 
    produto2='Miojo  - R$2,35'   
    produto3='Sazon -  R$4,85'
    produto4='Desinfetante - R$20,00'
    produto5='Kit copo - R$46,80'
    />} />

    <Route path='/historia' element={<Historia nomePagina='Nossa Historia' 
    conteudoHistoria=' Lorem adipisicing elit. Sed alias labore dicta nesciunt debitis commodi nihil ducimus! Fuga sunt molestias error esse ullam est sit amet consectetur adipisicing elit. Sed molestias aliquid officia rerum totam, numquam voluptatibus nostrum deserunt vitae expedita facere alias labore dicta nesciunt! Necessitatibus fugiat quaerat aspernatur voluptatem, debitis commodi nihil ducimus! Fuga sunt molestias error esse ullam est tenetur, modi obcaecati totam officia! Asperiores esse deserunt tenetur, modi obcaecati totam officia! Asperiores esse deserunt quidem amet consectetur adipisicing elit. Sed molestias aliquid officia rerum totam, numquam voluptatibus nostrum deserunt vitae   '/>} />

    <Route path='/contato' element={<Contato nomePagina='Contato' 
    contato='+55 (78)99999-1010'
    contato2='llllolp@hotmail.com'
    contato3='22204913@gmail.com.br'/>} />
    </Routes>

     { <Footer nomeFooter='TODOS OS DIREITOS RESERVADOS' /> }

    </div>

  )
}

export default App
