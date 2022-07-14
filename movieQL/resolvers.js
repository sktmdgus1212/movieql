import { getMovies, getById, addMovie, deleteMovies } from "./db/db";

const resolvers = {
    Query: {
        movies: (_, { limit, rating}) => getMovies(limit, rating),
    }
}

export default resolvers;