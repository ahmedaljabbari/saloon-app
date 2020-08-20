import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { userInformationService } from "../user-information.service";
import * as $ from "jquery";

@Component({
  selector: "app-dialogue",
  templateUrl: "./dialogue.component.html",
  styleUrls: ["./dialogue.component.css"],
})
export class DialogueComponent implements OnInit {
  firstName: string;
  inputValue: string;
  finnsName: boolean = false;
  foundStorage: boolean = false;

  addName(name: string) {
    this.firstName = name;
    this.finnsName = true;
    this.userInfo.saveName(name);
  }

  gotBeverage: boolean = false;
  beverage: string;

  handleBeverage(gotBeverage: string) {
    this.beverage = gotBeverage;
    this.gotBeverage = true;
  }
  //jquery
  hid() {
    $("#greet").fadeOut();
    $("#addBtn").fadeOut();
  }

  storedBeverage: string;
  gotStoredBeverage(storedBeverage: string) {
    this.beverage = storedBeverage;
    this.gotBeverage = true;
  }
  constructor(private userInfo: userInformationService) {}
  noStoredName: boolean = false;
  noStoredBeverage: boolean = false;

  ngOnInit() {
    if (localStorage.getItem("Name") !== null) {
      this.firstName = localStorage.getItem("Name");
      this.finnsName = true;
    } else {
      this.noStoredName = true;
    }

    if (localStorage.getItem("Beverage") !== null) {
      this.storedBeverage = localStorage.getItem("Beverage");
      this.noStoredBeverage = true;
    } else this.noStoredBeverage = false;
  }
}
