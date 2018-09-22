// core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MissionVisionComponent } from './components/about-us/mission-vision/mission-vision.component';


// modules
import { Routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MissionVisionComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
