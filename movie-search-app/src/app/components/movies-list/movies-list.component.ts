import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../shared/models';

@Component({
  selector: 'movies-list',
  template: `
    <movies-list-item
      *ngFor="let movie of movies"
      [movie]="movie"
      (favorite)="onFavorite($event)">
    </movies-list-item>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `,    
  ]
})
export class MoviesListComponent {
  @Input() movies: Movie[] = [];
  @Output() favoriteMovie = new EventEmitter();

  onFavorite($event) {
    this.favoriteMovie.emit($event);
  }
}
