import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HomeComponent } from './Components/navigation/home/home.component';
import { ContactComponent } from './Components/navigation/contact/contact.component';
import { GamesComponent } from './Components/navigation/games/games.component';
import { LessonsComponent } from './Components/navigation/lessons/lessons.component';
import {FormsModule} from "@angular/forms";
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ContactComponent,
    GamesComponent,
    LessonsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
