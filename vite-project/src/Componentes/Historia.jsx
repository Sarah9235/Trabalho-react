import styles from './Missao.module.css'
export function Historia(props) {
  return (

<div>

    <h1  className={styles.missaoTitulo}>{props.nomePagina}</h1>
    <p>{props.conteudoHistoria}</p>


 </div>
  )
}
