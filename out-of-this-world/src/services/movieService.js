import * as request from './requester';

const baseUrl = 'http://localhost:3030/movies/';

export const getAll = () => request.get(`${baseUrl}catalog`);

export const getOne= (movieId) => request.get(`${baseUrl}details/${movieId}`);


// export const getMyPets = (ownerId) => {
//     let query = encodeURIComponent(`_ownerId="${ownerId}"`);

//     return request.get(`${baseUrl}/pets?where=${query}`);
// };

export const create = (movieData) => request.post(`${baseUrl}create`, movieData);


// export const update = (petId, petData) => request.put(`${baseUrl}/pets/${petId}`, petData);

// export const getOne = (petId, signal) => {
//     return fetch(`${baseUrl}/pets/${petId}`, { signal })
//         .then(res => res.json())
// };

// export const destroy = (petId, token) => {
//     return fetch(`${baseUrl}/pets/${petId}`, {
//         method: 'DELETE',
//         headers: {
//             'X-Authorization': token
//         }
//     }).then(res => res.json());
// };

// export const like = (petId, pet, token) => {
//     return fetch(`${baseUrl}/pets/${petId}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(pet)
//     }).then(res => res.json());
// };