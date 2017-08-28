

import {Component} from "@angular/core"

@Component({
  selector:"my-app",
  template:`<h1>{{title}}</h1>
  <h2>123</h2>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   <router-outlet></router-outlet>`
})
export class AppComponent{
  title = 'Tour of Heroes';
}


