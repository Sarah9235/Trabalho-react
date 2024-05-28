import styles from './Produtos.module.css'



export function Produto(props) {
  return (

    <div>
    <h1 className={styles.produtoTitulo}>  {props.nomePagina}</h1>

  <p className={styles.produtos}> {props.produto1}</p>
  <p className={styles.produtos}> {props.produto2}</p>
  <p className={styles.produtos}> {props.produto3}</p>
  <p className={styles.produtos}> {props.produto4}</p>
  <p className={styles.produtos}> {props.produto5}</p>

   

    </div>
    // <h1>Produtos</h1>


  )
}
