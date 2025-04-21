import styles from './ListButton.module.css'

function ListButton(props) {
    return (
        <button className={styles.ListButton} onClick={props.onClick}>
            {props.name}
        </button>
    )
    
}

export default ListButton