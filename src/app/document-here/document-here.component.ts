import { Component, OnInit } from '@angular/core';
import {data} from '../data';

@Component({
  selector: 'app-document-here',
  templateUrl: './document-here.component.html',
  styleUrls: ['./document-here.component.scss']
})
export class DocumentHereComponent implements OnInit {
  public data = data;
  constructor() { }

  ngOnInit() {
  }

}
