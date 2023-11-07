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
  
  
  @Output('movie')
  movieAdded = new EventEmitter<Movie>();

}
