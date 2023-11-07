import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Movie from '../models/movie/movie.module';

type MovieFormMode = 'edit' | 'add' | 'delete' | null;
@Injectable({
  providedIn: 'root',
})
class MovieService {
  // Inform Currently Available movie Components
  movie$ = new BehaviorSubject<Movie[]>([]);
  // Inform the components of the movie currently being handled
  selectedMovie$ = new BehaviorSubject<Movie | null>(null);
  // Inform the components of the current mode of the form of movie
  movieFormMode$ = new BehaviorSubject<MovieFormMode>(null);

  constructor() {}

  getMovies(): Observable<Movie[]> {
    return this.movie$.asObservable();
  }

  addMovie(movie: Movie) {
    const currentMovie = this.movie$.getValue();
    this.movie$.next([...currentMovie, movie]);
  }

  getMovieById(movieId: string) {
    const movieFound =
      this.movie$.getValue().find((movie) => movie.id === movieId) ?? null;
    return movieFound;
  }

  updateMovie(updatedMovie: Movie) {
    const currentMovie = this.getMovieById(updatedMovie.id);
    if (currentMovie) {
      const editMovie = {
        ...updatedMovie,
        id: currentMovie.id,
      };
      this.movie$.next([
        ...this.movie$
          .getValue()
          .filter((movie) => movie.id !== currentMovie.id),
        editMovie,
      ]);
    }
  }

  deleteMovie(movieId: string) {
    const currentMovie = this.getMovieById(movieId);
    if (currentMovie) {
      this.movie$.next(this.movie$.getValue().filter(movie => movie.id !== movieId));
    }
  }

  switchSelectedMovie(movieId: string){
    this.selectedMovie$.next(this.getMovieById(movieId));
  }

  switchMovieFormMode(movieFormMode: MovieFormMode){
    this.movieFormMode$.next(movieFormMode)
    // If the form is in 'add' mode when the button clicks, the mode becomes null again and closes the modal
    if(movieFormMode === 'add') this.selectedMovie$.next(null)
  }
}
export { MovieService, MovieFormMode}