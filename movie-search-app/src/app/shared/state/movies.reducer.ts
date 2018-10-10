import { Movie } from '../models';
import { MovieSearchSuccess, ActionTypes } from '../../actions/movie.actions';

export type State = Movie[];

export function reducer(state: State = [], action) {
  switch (action.type) {
    case ActionTypes.MovieSearchSuccess: {
      debugger;
      return action.movies;
    }
    
    default: {
      return state;
    }
  }
}
