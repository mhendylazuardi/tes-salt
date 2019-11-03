import { Component, OnInit } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})
export class VideoSectionComponent implements OnInit {
  public data = data;
  constructor() { }

  ngOnInit() {
  }

}
