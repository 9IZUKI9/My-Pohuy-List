import styles from './ButtonRename.module.css'


function ButtonRename(props) {
    return (
        <button 
        type='button'
        className={styles.ButtonRename} 
        title={props.title}
        onClick={props.onClick}>
        ✎
        </button>
    )
}

export default ButtonRename