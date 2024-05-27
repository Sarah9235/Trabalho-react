import styles from './PaginaInicial.module.css'

export function Home(props) {
  return (


     <h1 className={styles.inicio}>{props.nomePagina}</h1>
 // <h1>Home</h1>

  )
}
