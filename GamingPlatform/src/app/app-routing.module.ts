import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./Components/navigation/navigation.component";
import {HomeComponent} from "./Components/navigation/home/home.component";
import {GamesComponent} from "./Components/navigation/games/games.component";
import {ContactComponent} from "./Components/navigation/contact/contact.component";
import {LessonsComponent} from "./Components/navigation/lessons/lessons.component";
import {NotFoundPageComponent} from "./Components/not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'',redirectTo:'/navigation/home',pathMatch:'full'},
  {path:'navigation',component:NavigationComponent,children:[
      {path:'home',component:HomeComponent},
      {path:'games',component:GamesComponent},
      {path:'contact',component:ContactComponent},
      {path:'lessons',component:LessonsComponent},
      {path:'**',component:NotFoundPageComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
