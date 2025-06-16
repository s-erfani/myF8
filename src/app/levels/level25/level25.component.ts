import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: './images/marker-icon-2x.png',
  iconUrl: './images/marker-icon.png',
  shadowUrl: './images/marker-shadow.png'
});

@Component({
  selector: 'app-level25',
  imports: [],
  templateUrl: './level25.component.html',
  styleUrl: './level25.component.css'
})
export class Level25Component implements AfterViewInit {
  private map!: L.Map;
  private targets = [
    {lat: 35.805270, lng: 51.4300031, message: 'first love'},
    {lat: 35.751230, lng: 51.4224875, message: 'first sight'},
    {lat: 35.744580, lng: 51.221574, message: 'first marathon'}
  ];

  private foundTargets: boolean[] = [false, false, false];
  allTargetsFound: boolean = false;
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
      this.levelService.completeLevel(25);
      this.router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([35.7219, 51.3347], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => this.onMapClick(e));
  }

  private onMapClick(e: L.LeafletMouseEvent): void {
    const clickedLat = e.latlng.lat;
    const clickedLng = e.latlng.lng;

    // Distance threshold in meters
    const threshold = 200;

    this.targets.forEach((target, index) => {
      if (!this.foundTargets[index]) {
        const dist = this.getDistance(clickedLat, clickedLng, target.lat, target.lng);
        if (dist < threshold) {
          L.marker([clickedLat, clickedLng]).addTo(this.map)
            .bindPopup(target.message)
            .openPopup();
          this.foundTargets[index] = true;

          if (this.foundTargets.every(f => f)) {
            this.allTargetsFound = true;
          }
        }
      }
    });
  }

  // Haversine distance calculation
  private getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371e3; // meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }
}
