import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { MovieSearch } from '../../actions/movie.actions';
import * as fromRoot from '../../shared/state';
import { Movie } from '../../shared/models';

@Component({
  selector: 'search-movies-page',
  template: `
    <search-movies-box
      (search)="onSearch($event)">
    </search-movies-box>

    <movies-list
      [movies]="movies$ | async"
      (favoriteMovie)="onFavoriteMovie($event)">
    </movies-list>
  `
})
export class SearchMoviesPageComponent {
  movies$ = this.store.pipe(select(fromRoot.selectMovies));

  constructor(private store: Store<fromRoot.State>) {}

  onSearch(searchTerm: string) {
    this.store.dispatch(new MovieSearch(searchTerm));
  }

  onFavoriteMovie($event: Movie) {
    
  }
}
