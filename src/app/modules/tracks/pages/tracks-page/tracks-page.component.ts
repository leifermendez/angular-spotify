import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> = []
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    //TODO:🙄🙄 Sigo estando pendiente por si algo pasa agregas o quitas canciones
    const observable1$ = this.trackService.allInOne$.subscribe(
      (data) => {
        console.log('OJO 🔴🔴 ', data);
      }
    )
  }

}
