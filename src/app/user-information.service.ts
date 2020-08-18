import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userInformationService {
  saveName(name: string) {
    localStorage.setItem("Name", name);
  }
  saveBeverage(beverage: string) {
    localStorage.setItem("Beverage", beverage);
  }

  constructor() { }
}
