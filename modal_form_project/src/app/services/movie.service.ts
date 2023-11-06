import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Movie from '../models/movie/movie.module';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
private $movie = new BehaviorSubject<Movie[]>([])
  constructor() { }

  getMovies(): Observable<Movie[]>{
      return this.$movie.asObservable();
  }

  addMovie(movie: Movie){
    const currentMovie = this.$movie.getValue();
    currentMovie.push(movie);
    this.$movie.next(currentMovie);
  }

  updateMovie(index: number, updatedMovie: Movie){
    const currentMovie = this.$movie.getValue();
    currentMovie[index] = updatedMovie;
    this.$movie.next(currentMovie);
  }

  deleteMovie(index: number){
    const currentMovie = this.$movie.getValue();
    currentMovie.splice(index,1);
    this.$movie.next(currentMovie);
  }
}
