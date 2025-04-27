import styles from './DeleteButton.module.css'

function deleteButton(props) {
    return(
        <button
        type='button'
        className={styles.DeleteButton} 
        title={props.title}
        onClick={props.onClick}>
        ⨯
        </button>
    )
}

export default deleteButton