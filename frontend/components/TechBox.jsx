import styles from '../styles/TechBox.module.css';

const TechBox = (props) => {
    return (
        <div className={styles.techbox_container}>
            <div className={styles.techbox_icon}>
            {props.icon}
            </div>
            <p> {props.name} </p>
        </div>
    );

}

export default TechBox;
