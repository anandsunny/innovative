import { Routes, RouterModule } from '@angular/router';

import { SliderComponent } from './components/slider/slider.component';
import { MissionVisionComponent } from './components/about-us/mission-vision/mission-vision.component';
import { CoreValueComponent } from './components/about-us/core-value/core-value.component';
import { PhilosophyComponent } from './components/about-us/philosophy/philosophy.component';
import { AdvantageComponent } from './components/about-us/advantage/advantage.component';


const router: Routes = [
    { path: '', component: SliderComponent },
    { path: 'about-us/mission-and-vision', component: MissionVisionComponent },
    { path: 'about-us/core-value', component: CoreValueComponent },
    { path: 'about-us/philosophy', component: PhilosophyComponent },
    { path: 'about-us/advantage', component: AdvantageComponent }
]

export const Routing = RouterModule.forRoot(router);