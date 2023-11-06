import Movie from 'src/app/models/movie/movie.module';
import { MovieService } from './../../services/movie.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private movieService: MovieService) {}
  movie:Movie ={
    id:0,
    title:'',
    gender:''
  }
  
  @Output('movie')
  movieAdded = new EventEmitter<Movie>();

  addMovie(event: Event) {
    event.preventDefault();
    this.movieAdded.emit(this.movie);
    this.movie = {
      id: 0,
      title: '',
      gender: '',
    };
  }
}
