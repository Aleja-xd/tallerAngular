import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie.model';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent {
  @Input() serie!: Serie;
}
