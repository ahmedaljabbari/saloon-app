import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css'],
  inputs: ["beverageValue"]
})

export class TheUsualComponent implements OnInit {
  @Output() sendStoredBeverage: EventEmitter<string> = new EventEmitter<string>();
  beverageValue: string;
  getTheUsual() {
    this.sendStoredBeverage.emit(this.beverageValue);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
