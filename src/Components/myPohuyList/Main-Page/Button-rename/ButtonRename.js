import styles from './ButtonRename.module.css'


function ButtonRename(props) {
    return (
        <button className={styles.buttonRename} type='button'
        onClick={props.onClick}></button>
    )
}

export default ButtonRename