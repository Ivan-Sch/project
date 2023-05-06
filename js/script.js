"use sctrict";

const number0Films = +prompt('Скольк офильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из послдений просмотренных фильмов", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из послдений просмотренных фильмов", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);