import styles from './ListButton.module.css'

function ListButton(props) {
    return (
        <button
        type='button'
        className={styles.ListButton}
        title={props.title} 
        onClick={props.onClick}>
        {props.name}
        </button>
    )
}

export default ListButton