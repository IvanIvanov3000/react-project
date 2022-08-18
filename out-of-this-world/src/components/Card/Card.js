import { Link } from 'react-router-dom';

import styles from './Card.module.css'

const Card = ({ movie }) => {

    return (
        <div className={styles.card}>
            <img src={movie.image} alt="" />

            <div className={styles['card-wrapper']}>
                <h3>{movie.title.length > 15
                    ? movie.title.slice(0, 15) + "..."
                    : movie.title
                }</h3>
                <span className={styles.year} >{movie.year}</span>
                <span className={
                    `${styles.likes} ${movie.likes.length > 3
                        ? styles.popular
                        : movie.likes.length >= 1 ? styles.interesting : styles.ordinary}`
                }>{movie.likes.length}</span>

                <p>{movie.description.length > 150
                    ? movie.description.slice(0, 150) + "..."
                    : movie.description
                }
                </p>
                <Link to={`/details/${movie._id}`}><button class={styles.btn}>Details</button></Link>
            </div>

        </div>
    );
}

export default Card;