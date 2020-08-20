import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { userInformationService } from "../user-information.service";

@Component({
  selector: "app-beverages",
  templateUrl: "./beverages.component.html",
  styleUrls: ["./beverages.component.css"],
})
export class BeveragesComponent implements OnInit {
  beverageList: object[] = [
    {
      Id: "1",
      val: "Vodka",
    },
    {
      Id: "2",
      val: "Wine",
    },
    {
      Id: "3",
      val: "Beer",
    },
    {
      Id: "4",
      val: "Champagne",
    },
    {
      Id: "5",
      val: "Whisky",
    },
    {
      Id: "6",
      val: "Tequila",
    },
  ];
  @Output() sendBeverage: EventEmitter<string> = new EventEmitter<string>();

  selectedBeverage: string = "";
  choosenBeverage(beverageList): void {
    this.selectedBeverage = beverageList.val;
    this.sendBeverage.emit(this.selectedBeverage);
    this.userInfo.saveBeverage(beverageList.val);
    alert("One " + this.selectedBeverage + ", coming right up!");
  }

  constructor(private userInfo: userInformationService) {}
  ngOnInit(): void {}
}
