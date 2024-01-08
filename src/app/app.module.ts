import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroPageComponent } from './component/hero-page/hero-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    MainPageComponent,
    AboutMeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
