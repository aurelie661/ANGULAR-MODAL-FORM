import { Component,Input } from '@angular/core';
import Movie from 'src/app/models/movie/movie.module';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input()
  movies: Movie[] = []

  onDelete(movie: Movie){
    // this.movies.splice(index,1)
    this.movies =[...this.movies, movie]
    }
}
