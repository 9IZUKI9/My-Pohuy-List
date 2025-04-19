import styles from './ListButtons.module.css'

function ListButtons(props) {
    return (
        <button className={styles.ListButtons} onClick={props.onClick}>
            {props.name}
        </button>
    )
    
}

export default ListButtons