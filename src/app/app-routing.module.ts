import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ErrorComponent } from './error404/error404.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'result/:id', component: SearchResultComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '*', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }