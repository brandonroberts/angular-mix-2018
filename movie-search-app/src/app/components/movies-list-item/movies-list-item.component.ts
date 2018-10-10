import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../shared/models';

@Component({
  selector: 'movies-list-item',
  template: `
    <mat-card>
      <mat-card-title-group>
        <mat-card-title>{{ movie.title }}</mat-card-title>
      </mat-card-title-group>
      <mat-card-content>
        {{movie.overview}}
      </mat-card-content>
      <mat-card-footer>
        <button mat-button color="primary" (click)="favorite.emit(movie)">Favorite</button>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      :host a {
        display: flex;
      }

      mat-card {
        width: 400px;
        margin: 15px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
      }

      @media only screen and (max-width: 768px) {
        mat-card {
          margin: 15px 0 !important;
        }
      }
      mat-card:hover {
        box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, 0.5);
      }
      mat-card-title {
        margin-right: 10px;
      }
      mat-card-title-group {
        margin: 0;
      }
      mat-card-content {
        margin-top: 15px;
        margin: 15px 0 0;
      }
      mat-card-footer {
        padding: 0 25px 25px;
        display: flex;
        justify-content: flex-end;
      }
    `,
  ]
})
export class MoviesListItemComponent {
  @Input() movie: Movie;
  @Output() favorite = new EventEmitter<Movie>();
}
