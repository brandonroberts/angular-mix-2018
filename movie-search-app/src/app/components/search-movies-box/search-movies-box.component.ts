import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-movies-box',
  template: `
    <mat-card>
      <mat-card-title>Search Movies By Director</mat-card-title>
      <mat-card-content>
        <mat-form-field>
          <input matInput #input placeholder="Search for a movie">
        </mat-form-field>
      </mat-card-content>
      <mat-card-footer>
        <button mat-button color="primary" (click)="onSearch(input.value)">Search</button>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [
    `
      mat-card-title,
      mat-card-content,
      mat-card-footer {
        display: flex;
        justify-content: center;
      }

      mat-card-footer {
        color: #ff0000;
        padding: 5px 0;
      }

      .mat-spinner {
        position: relative;
        top: 10px;
        left: 10px;
        visibility: hidden;
      }

      .mat-spinner.show {
        visibility: visible;
      }
    `,    
  ]
})
export class SearchMoviesBoxComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(searchTerm: string) {
    this.search.emit(searchTerm);
  }
}
