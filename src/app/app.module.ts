import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';
import {HeroDetailComponent} from "./hero_detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeroSerchComponent} from "./hero_serch.component";
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent,HeroSerchComponent ],
  providers:[HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


