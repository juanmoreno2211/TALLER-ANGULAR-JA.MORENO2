import { Component } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent {
  series: Serie[] = [];

  selectedSerie: Serie | null = null;
  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      console.log("Series cargadas:", data);
    });
  }

  getAverageSeasons(): number {
    return this.series.length === 0 ? 0 :
      this.series.reduce((acc, s) => acc + s.seasons, 0) / this.series.length;
  }

  onSelectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }
}
