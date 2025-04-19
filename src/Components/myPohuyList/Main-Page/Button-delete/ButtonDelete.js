import styles from './ButtonDelete.module.css'

function ButtonDelete(props) {
    return(
        <button className={styles.buttonDelete} type='button'
        onClick={props.onClick}></button>
    )
}

export default ButtonDelete