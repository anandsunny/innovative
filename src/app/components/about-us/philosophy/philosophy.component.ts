import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.css']
})
export class PhilosophyComponent implements OnInit {

  banner_title: String = "PHILOSOPHY";
  
  constructor() { }

  ngOnInit() {
  }

}
