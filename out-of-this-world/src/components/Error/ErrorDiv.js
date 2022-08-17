import styles from './ErrorDiv.module.css';

const ErrorDiv = ({ err }) => {

    return (
        <>
            {err.message
                ? <div className={styles.errorDiv}>
                    {err.message}
                </div>
                : <></>
            }

        </>
    )
}

export default ErrorDiv;