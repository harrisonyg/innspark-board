import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  activeLink: string = 'home';
  isBurgerMenuOpen: boolean = false;

  setActiveLink(link: string) {
    this.activeLink = link;
  }



}
