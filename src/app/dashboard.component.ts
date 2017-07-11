import { Component,OnInit } from '@angular/core';
import {Hero} from "./hero";
import construct = Reflect.construct;
import {HeroService} from "./hero.service";
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})
export class DashboardComponent {
  heroes:Hero[];
  constructor(private heroService:HeroService){}
  ngOnInit():void{
    this.heroService.getHeroes().then(heros=>this.heroes=heros.slice(0,4))
  }
}
