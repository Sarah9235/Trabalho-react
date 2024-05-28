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

    mente e no coração dos consumidores e funcionários."'/>} />


    <Route path='/produto' element={<Produto
    nomePagina='Nossos Produtos' 
    produto1='Agua Sanitaria  - R$12,99' 
    produto2='Miojo  - R$2,35'   
    produto3='Sazon -  R$4,85'
    produto4='Desinfetante - R$20,00'
    produto5='Kit copo - R$46,80'
    />} />

    <Route path='/historia' element={<Historia nomePagina='Nossa Historia' 
    conteudoHistoria=' Fundado em 1972 por Joaquim Sabiá em Boa Esperança, o Mercado Sabiá sempre ofereceu produtos frescos de agricultores locais. Em 1995, sua filha Ana modernizou o mercado, adicionando produtos orgânicos e um café. Conhecido pela qualidade e atendimento, o mercado continua crescendo com foco na comunidade.    '/>} />


    <Route path='/contato' element={<Contato nomePagina='Contato' 
    contato='+55 (32) 9 1234-5678'
    contato2='mercado.sabia@hotmail.com'
    contato3='@Sabia_Varejista'/>} />
    </Routes>

     { <Footer nomeFooter='TODOS OS DIREITOS RESERVADOS' /> }

    </div>

  )
}

export default App
