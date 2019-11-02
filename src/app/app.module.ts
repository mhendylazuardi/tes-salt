import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatCardModule, MatGridListModule} from '@angular/material';
import { PagePositionComponent } from './page-position/page-position.component';
import { VideoSectionComponent } from './video-section/video-section.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    PagePositionComponent,
    VideoSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
