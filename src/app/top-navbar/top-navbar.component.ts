import { Component, OnInit } from '@angular/core';
import {data} from '../data';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  data = data;
  constructor() { }

  ngOnInit() {
  }

}
