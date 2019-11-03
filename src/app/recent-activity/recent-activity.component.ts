import { Component, OnInit } from '@angular/core';
import {data} from '../data';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit {
  public data = data;
  constructor() { }

  ngOnInit() {
  }

}
