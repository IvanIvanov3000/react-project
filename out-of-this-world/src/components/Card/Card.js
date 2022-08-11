import {Link} from 'react-router-dom';

const Card = ({ movie }) => {

    return (
        <div id="card-catalog">
            <img src={movie.image} alt="" />

            <div className="card-wrapper">
                <h3>{movie.title}</h3>
                <span className="year">{movie.year}</span>
                <p>{movie.description.length > 150
                    ? movie.description.slice(0, 150)
                    : movie.description
                }
                </p>
                <Link className="details btn" to={`/details/${movie._id}`}>Details</Link>
            </div>

        </div>
    );
}

export default Card;