import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TrackModel = {
    cover: 'https://th.bing.com/th/id/R.e2d5034c67630e24331ae545ea9a38b1?rik=u4ZCXNaA4Bp1Pw&pid=ImgRaw&r=0',
    name: 'Gioli & Assia',
    album: 'BEBE (oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {

    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibendo cancion... ', response);
      }
    )

    this.listObservers$ = [observer1$]

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('Se cierra sesion');
  }

}
