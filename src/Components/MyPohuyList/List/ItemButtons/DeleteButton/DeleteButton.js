import styles from './DeleteButton.module.css'

function deleteButton(props) {
    return(
        <button className={styles.DeleteButton} type='button'
        onClick={props.onClick}>⨯</button>
    )
}

export default deleteButton