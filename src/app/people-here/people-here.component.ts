import { Component, OnInit } from '@angular/core';
import {data} from '../data';

@Component({
  selector: 'app-people-here',
  templateUrl: './people-here.component.html',
  styleUrls: ['./people-here.component.scss']
})
export class PeopleHereComponent implements OnInit {
  public data = data;
  constructor() { }

  ngOnInit() {
  }

}
