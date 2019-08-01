import { Component, OnInit } from '@angular/core';
import * as videojs from 'video.js';

//import '@videojs/http-streaming';


@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
