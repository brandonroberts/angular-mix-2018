import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movie } from '../shared/models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  findMovies(searchTerm: string): Observable<Movie[]> {
    const API_PATH = `https://api.themoviedb.org/3/search/person?api_key=${environment.apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    return this.http.get<{ results: { known_for: any[] } }>(API_PATH)
      .pipe(map(data => data.results[0].known_for));
  }
}
