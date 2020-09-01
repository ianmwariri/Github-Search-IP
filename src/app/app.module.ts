import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ErrorHighlightDirective } from './error-highlight.directive';
import { ErrorComponent } from './error404/error404.component';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DaysPassedPipe } from './days-passed-pipe/DaysPassedPipe';

const githubProfile = new InjectionToken('externalUrlRedirectResolver');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchResultComponent,
    ErrorHighlightDirective,
    ErrorComponent,
    NavbarComponent,
    DaysPassedPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // FontAwesomeModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }