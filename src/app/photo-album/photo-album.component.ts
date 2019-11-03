import { Component, OnInit } from '@angular/core';
import {data} from '../data';
@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit {
  public data = data;
  constructor() {
  }

  ngOnInit() {
  }

}
