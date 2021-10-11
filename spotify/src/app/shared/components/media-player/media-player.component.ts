import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover: any = {
    cover: 'https://th.bing.com/th/id/R.e2d5034c67630e24331ae545ea9a38b1?rik=u4ZCXNaA4Bp1Pw&pid=ImgRaw&r=0',
    name: 'Gioli & Assia',
    album: 'BEBE (oficial)'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
