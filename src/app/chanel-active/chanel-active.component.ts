import { Component, OnInit } from '@angular/core';
import {channel} from '../channel';

@Component({
  selector: 'app-chanel-active',
  templateUrl: './chanel-active.component.html',
  styleUrls: ['./chanel-active.component.scss']
})
export class ChanelActiveComponent implements OnInit {
  public channel = channel;
  constructor() { }

  ngOnInit() {
  }

}
