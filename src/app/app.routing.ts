import { Routes, RouterModule } from '@angular/router';

import { SliderComponent } from './components/slider/slider.component';
import { MissionVisionComponent } from './components/about-us/mission-vision/mission-vision.component';


const routes: Routes = [
    { path: '', component: SliderComponent },
    { path: 'mission-and-vision', component: MissionVisionComponent }
];

export const Routing = RouterModule.forRoot(routes);