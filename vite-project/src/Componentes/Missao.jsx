import styles from './Missao.module.css'



export function Missao(props) {
  return (

<div>
     <h1>{props.nomePagina}</h1>
     
     <p className={styles.missao}>{props.missao}</p>

     </div>
  )
}
