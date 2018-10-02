import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-value',
  templateUrl: './core-value.component.html',
  styleUrls: ['./core-value.component.css']
})
export class CoreValueComponent implements OnInit {

  banner_title: String = 'CORE VALUE';
  constructor() { }

  ngOnInit() {
  }

}
