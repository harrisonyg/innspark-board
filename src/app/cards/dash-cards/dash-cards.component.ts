import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-cards',
  templateUrl: './dash-cards.component.html',
  styleUrls: ['./dash-cards.component.css']
})
export class DashCardsComponent {
  randomNumbers = [this.generateRandomNumber(), this.generateRandomNumber(), this.generateRandomNumber(), this.generateRandomNumber()];

  public generateRandomNumber(): number {
    return Math.floor(Math.random() * (302394 - 19800 + 1)) + 19800;
  }

}
