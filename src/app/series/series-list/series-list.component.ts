import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieService } from '../serie.service';
import { Serie } from '../serie.model';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './series-list.component.html'
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe({
      next: (data) => {
        this.series = data;
      },
      error: (err) => {
        console.error('Error cargando las series:', err);
      }
    });
  }

  getAverageSeasons(): number {
    if (this.series.length === 0) return 0;
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    return total / this.series.length;
  }

}
