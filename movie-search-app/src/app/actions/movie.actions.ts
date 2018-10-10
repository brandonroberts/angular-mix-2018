import { Action } from '@ngrx/store';
import { Movie } from '../shared/models';

export enum ActionTypes {
  MovieSearch = '[Movie Search Page] Search',
  MovieSearchSuccess = '[Movie Search/API] Search Success',
  MovieSearchFailure = '[Movie Search/API] Search Failure',
}

export class MovieSearch implements Action {
  readonly type = ActionTypes.MovieSearch;

  constructor(public searchTerm: string) {}
}

export class MovieSearchSuccess implements Action {
  readonly type = ActionTypes.MovieSearchSuccess;

  constructor(public movies: Movie[]) {}
}

export class MovieSearchFailure implements Action {
  readonly type = ActionTypes.MovieSearchFailure;

  constructor(public error: string) {}
}

export type Union = MovieSearch | MovieSearchSuccess | MovieSearchFailure;