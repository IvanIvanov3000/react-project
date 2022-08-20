import styles from './CommentCard.module.css';
import profile from '../../../assets/images/profile.png'
const CommentCard = ({ comment }) => {
    return (
        <div className={`col-md-5 ${styles.card}`}>

            {comment.author.image
                ? <div className={`${styles.img} ${styles.circle}`} style={{ backgroundImage: `url(${comment.author.image})` }}></div>
                : <div className={`${styles.img} ${styles.circle}`} ></div>
            }
            <div className={styles.rating}>Rating: {comment.rating}</div>
            <p className={styles["user-details"]}><b>{comment.author.username}</b> <br /> {comment.author.email}</p>
            <p className={styles.text}>{comment.text}</p>
        </div>
    );
}

export default CommentCard;