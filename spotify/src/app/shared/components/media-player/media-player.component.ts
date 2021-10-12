import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TrackModel = {
    cover: 'https://th.bing.com/th/id/R.e2d5034c67630e24331ae545ea9a38b1?rik=u4ZCXNaA4Bp1Pw&pid=ImgRaw&r=0',
    name: 'Gioli & Assia',
    album: 'BEBE (oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }


  constructor() { }

  ngOnInit(): void {
  }

}
