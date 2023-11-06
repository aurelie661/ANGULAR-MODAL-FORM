import { MovieService } from './services/movie.service';
import { Component } from '@angular/core';
import Movie from './models/movie/movie.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal_form_project';
  modalVisibility = ""
  movies:Movie[] = []

  constructor(private movieService: MovieService) {}
  changeModalVisilibty(value: string) {
    this.modalVisibility = value
  }

  addMovieHandler(movie:Movie){
    // this.movies = [...this.movies, movie]
    this.movieService.addMovie(movie)
  }
}
