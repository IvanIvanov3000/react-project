import * as request from './requester';

const baseUrl = 'http://localhost:3030/movies/';

export const getAll = () => request.get(`${baseUrl}catalog`);
export const getTopMovies = () => request.get(`${baseUrl}catalog/top`);


export const getOne = (movieId) => request.get(`${baseUrl}details/${movieId}`);

export const create = (movieData) => request.post(`${baseUrl}create`, movieData);

export const likeMovie = (movieId) => request.get(`${baseUrl}${movieId}/like`);
export const dislikeMovie = (movieId) => request.get(`${baseUrl}${movieId}/dislike`);
export const destroy = (movieId) => request.del(`${baseUrl}${movieId}/delete`);
export const edit = (movieId, movieData) => request.put(`${baseUrl}${movieId}/edit`, movieData);



// export const getMyPets = (ownerId) => {
//     let query = encodeURIComponent(`_ownerId="${ownerId}"`);

//     return request.get(`${baseUrl}/pets?where=${query}`);
// };





// export const getOne = (petId, signal) => {
//     return fetch(`${baseUrl}/pets/${petId}`, { signal })
//         .then(res => res.json())
// };