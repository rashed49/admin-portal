import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
private isLoggedIn = false;
  constructor() { }
toggle(){
 this.isLoggedIn=! this.isLoggedIn;
}
  ngOnInit() {
  }

}
