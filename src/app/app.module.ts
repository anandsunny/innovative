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
import { CconscrollmanuDirective } from './directives/cconscrollmanu.directive';
import { BannerComponent } from './components/banner/banner.component';
import { CoreValueComponent } from './components/about-us/core-value/core-value.component';
import { PhilosophyComponent } from './components/about-us/philosophy/philosophy.component';
import { AdvantageComponent } from './components/about-us/advantage/advantage.component';
import { MethodologyComponent } from './components/about-us/methodology/methodology.component';
import { CommitmentComponent } from './components/about-us/commitment/commitment.component';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MissionVisionComponent,
    CconscrollmanuDirective,
    BannerComponent,
    CoreValueComponent,
    PhilosophyComponent,
    AdvantageComponent,
    MethodologyComponent,
    CommitmentComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
