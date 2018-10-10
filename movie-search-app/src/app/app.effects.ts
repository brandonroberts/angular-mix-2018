import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { MoviesService } from './services/movies.service';
import * as Movie from './actions/movie.actions';

@Injectable()
export class AppEffects {
  @Effect()
  searchMovies$ = this.actions$.pipe(
    ofType<Movie.MovieSearch>(Movie.ActionTypes.MovieSearch),
    map(action => action.searchTerm),
    exhaustMap(searchTerm => 
      this.moviesService.findMovies(searchTerm)
        .pipe(
          map(movies => new Movie.MovieSearchSuccess(movies)),
          catchError((error: string) => of(new Movie.MovieSearchFailure(error)))
        )
    ));

  constructor(private actions$: Actions, private moviesService: MoviesService) {}
}
