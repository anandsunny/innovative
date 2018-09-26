import { Routes, RouterModule } from '@angular/router';

import { SliderComponent } from './components/slider/slider.component';
import { MissionVisionComponent } from './components/about-us/mission-vision/mission-vision.component';


const routes: Routes = [
    { path: '', component: SliderComponent },
    { path: 'about-us/mission-and-vission', component: MissionVisionComponent }
];

export const Routing = RouterModule.forRoot(routes);