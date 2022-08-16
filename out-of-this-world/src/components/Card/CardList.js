import Card from "./Card";


const CardList = ({ movies }) => {
    return (
        <>
            {movies.length > 0
                ? <>{movies.map(x => <Card key={x._id} movie={x} />)}</>
                : <p className="no-movies">No movies in database!</p>
            }
        </>
    );
}

export default CardList;