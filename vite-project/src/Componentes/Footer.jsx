import styles from './Footer.module.css'

export function Footer(props) {
  return (

    <footer className={styles.footer}>
    <span>{props.nomeFooter}</span>
    <p>{props.cantoFooter}</p>
    </footer>
  )
}
