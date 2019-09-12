import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class Assignment3Component implements OnInit {
  buttonStatus = false;
  buttonClicks = [];

  constructor() {}

  ngOnInit() {}

  toggleButton() {
    this.buttonClicks.push(new Date());
    this.buttonStatus = !this.buttonStatus;
  }


}
