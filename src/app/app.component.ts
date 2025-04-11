import { Component } from '@angular/core';
import { SeriesListComponent } from './series/series-list/series-list.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SeriesListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
