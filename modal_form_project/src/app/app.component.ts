import { MovieFormMode, MovieService } from './services/movie.service';
import { Component, OnDestroy } from '@angular/core';
import Movie from './models/movie/movie.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  title = 'modal_form_project';

  movies: Movie[] = [];
  movieSub: Subscription | undefined;

  movieFormMode: MovieFormMode = null;
  movieFormModeSub: Subscription | undefined;

  constructor(private movieService: MovieService) {
    this.movieSub = this.movieService.movie$.subscribe(
      (movies) => (this.movies = movies)
    );
    this.movieFormModeSub = this.movieService.movieFormMode$.subscribe(
      (mode) => (this.movieFormMode = mode)
    );
  }
  ngOnDestroy(): void {
    this.movieSub?.unsubscribe();
    this.movieFormModeSub?.unsubscribe();
  }

  clickHandler() {
    this.movieService.switchMovieFormMode('add');
  }
  closeModalHandler() {
    this.movieService.switchMovieFormMode(null);
  }
}
