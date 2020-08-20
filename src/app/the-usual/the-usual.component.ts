import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-the-usual",
  templateUrl: "./the-usual.component.html",
  styleUrls: ["./the-usual.component.css"],
  inputs: ["beverageValue"],
})
export class TheUsualComponent implements OnInit {
  @Output() sendStoredBeverage: EventEmitter<string> = new EventEmitter<
    string
  >();
  beverageValue: string;
  getTheUsual() {
    this.sendStoredBeverage.emit(this.beverageValue);
    alert("One " + this.beverageValue + ", coming right up!");
    $("#divi").hide();
  }
  constructor() {}

  ngOnInit(): void {}
}
