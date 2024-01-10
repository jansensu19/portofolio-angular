import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroPageComponent } from './component/hero-page/hero-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { PortofolioComponent } from './component/portofolio/portofolio.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './component/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPageComponent,
    MainPageComponent,
    AboutMeComponent,
    ExperienceComponent,
    PortofolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
