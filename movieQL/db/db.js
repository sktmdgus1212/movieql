let movies = [
    {
        id: 1,
        name: "star wars",
        score: 2
    },
    {
        id: 2,
        name: "범죄도시",
        score: 2
    },
    {
        id: 3,
        name: "설국열차",
        score: 0
    },
    {
        id: 4,
        name: "마녀",
        score: 3
    }
];


export const getMovies = () => movies;

export const getById = id => {
    const filteredmovies =  movies.filter(movie => movie.id === id);
    return filteredmovies[0];
};

export const deleteMovies = id => {
    const cleanmovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanmovies.length){
        movies = cleanmovies;
        return true;
    }
    else{
        return  false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}